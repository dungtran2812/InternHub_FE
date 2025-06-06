"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AlertCircle, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useGetJobFilterQuery } from "@/services/internHubApi"
import JobCard from "@/components/JobCard"
import JobSearchBar from "@/components/JobSearchBar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function JobSearchPage() {
  const { industry, jobFunction, searchText } = useSelector((state) => state.rootReducer.user.search)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(12)

  const {
    data: jobData,
    isLoading: isLoadingJob,
    error: errorJob,
    isFetching,
  } = useGetJobFilterQuery({
    searchText: searchText,
    jobFunctionId: jobFunction,
    industryId: industry,
    page: page,
    pageSize: pageSize,
  })

  const totalPages = jobData?.totalPages

  const handlePageChange = (newPage) => {
    console.log(newPage)
    setPage(newPage)
  }

  const handlePageSizeChange = (value) => {
    setPageSize(Number(value))
    setPage(1)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [page])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <JobSearchBar />

            {!isLoadingJob && !errorJob && jobData?.totalElements > 0 && (
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">{jobData.totalElements}</span>
                  <span className="text-lg">việc làm phù hợp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Hiển thị:</span>
                  <Select value={pageSize.toString()} onValueChange={handlePageSizeChange}>
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="36">36</SelectItem>
                      <SelectItem value="48">48</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>

          {errorJob && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Failed to load jobs. Please try again later.</AlertDescription>
            </Alert>
          )}

          {isLoadingJob ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobData?.content.map((job) => (
               <Link key={job.id} to={`/job-detail/${job.id}`}>
                <JobCard key={job.id} job={job} />
               </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!isLoadingJob && !errorJob && jobData?.content.length > 0 && (
            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={() => handlePageChange(1)} disabled={page === 1}>
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, index) => (
                  <Button
                    key={index + 1}
                    variant={index + 1 === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(index + 1)}
                    className="min-w-[40px]"
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(page + 1)}
                disabled={page >= totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(totalPages)}
                disabled={page >= totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {isFetching && (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
            </div>
          )}

          {!isLoadingJob && !errorJob && jobData?.content.length === 0 && (
            <Alert>
              <AlertTitle>No jobs found</AlertTitle>
              <AlertDescription>Try adjusting your search criteria to find more opportunities.</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

