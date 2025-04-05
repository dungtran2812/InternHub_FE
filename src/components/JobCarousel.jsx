"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {useGetJobFilterQuery } from "@/services/internHubApi"
import JobCard from "./JobCard"
import { Card, CardContent } from "./ui/card"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

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
  const { data, isLoading, isError } = useGetJobFilterQuery({page: 1, pageSize: 90})
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const jobs = data?.content
  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
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
          loop: false,
        }}
        setApi={setApi}
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
              {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {jobPages?.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      </Carousel>
    </div>
  )
}

