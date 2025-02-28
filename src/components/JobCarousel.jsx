"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useGetAllJobQuery } from "@/services/internHubApi"
import JobCard from "./JobCard"
import { Card, CardContent } from "./ui/card"
import { Link } from "react-router-dom"

const JOBS_PER_PAGE = 9

// Loading Card Component
function LoadingCard() {
  return (
    <Card className="animate-pulse">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-md bg-muted/10" />
          <div className="flex-1 space-y-3">
            <div className="h-4 w-3/4 rounded bg-muted/10" />
            <div className="h-3 w-1/2 rounded bg-muted/10" />
            <div className="h-3 w-2/3 rounded bg-muted/10" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function JobCarousel() {
  const { data: jobs, isLoading, isError } = useGetAllJobQuery()

  if (isError) {
    return (
      <div className="text-center py-12 animate-in fade-in">
        <h3 className="text-xl font-semibold text-red-600">Không thể tải dữ liệu</h3>
        <p className="text-muted-foreground mt-2">Vui lòng thử lại sau</p>
      </div>
    )
  }

  const jobPages = jobs
    ? Array.from({ length: Math.ceil(jobs.length / JOBS_PER_PAGE) }, (_, i) =>
        jobs.slice(i * JOBS_PER_PAGE, (i + 1) * JOBS_PER_PAGE),
      )
    : []

  return (
    <div className="text-2xl font-bold mb-4 text-center my-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Việc Làm Gợi Ý</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[1200px] mx-auto"
      >
        <CarouselContent>
          {isLoading ? (
            <CarouselItem className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
                {Array.from({ length: 9 }).map((_, index) => (
                  <LoadingCard key={index} />
                ))}
              </div>
            </CarouselItem>
          ) : (
            jobPages.map((pageJobs, pageIndex) => (
              <CarouselItem key={pageIndex} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
                  {pageJobs.map((job) => (
                    <Link to={`job-detail/${job.id}`} key={job.id} className="animate-in fade-in">
                      <JobCard job={job} />
                    </Link>
                  ))}
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
        <div className="mt-8 flex justify-center gap-2">
          {!isLoading &&
            jobPages.map((_, index) => (
              <div key={index} className={`h-2 w-2 rounded-full ${index === 0 ? "bg-blue-600" : "bg-gray-300"}`} />
            ))}
        </div>
      </Carousel>
    </div>
  )
}

