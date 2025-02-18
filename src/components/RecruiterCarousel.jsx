import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useGetAllRecruiterQuery } from "@/services/internHubApi"

export default function RecruiterCarousel() {
  const { data: recruiters, isLoading, isError } = useGetAllRecruiterQuery()
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center bg-background px-4 md:px-16 py-4">
        {/* Title Loading Animation */}
        <div className="h-8 w-64 mb-4 bg-muted rounded-lg animate-pulse" />

        {/* Card Loading Animation */}
        <div className="w-full max-w-[1440px] h-[300px] rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-muted animate-pulse" />

          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Content Layout Placeholder */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Logo Placeholder */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-muted/50 rounded-lg animate-pulse" />

              {/* Text Content Placeholders */}
              <div className="flex-1 space-y-3">
                <div className="h-6 bg-muted/50 rounded w-48 animate-pulse" />
                <div className="h-4 bg-muted/50 rounded w-full animate-pulse" />
                <div className="h-4 bg-muted/50 rounded w-3/4 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Dots Loading Animation */}
        <div className="flex justify-center gap-2 mt-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="w-3 h-3 rounded-full bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center bg-background px-4 md:px-16 py-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold leading-normal mb-4">Nhà Tuyển Dụng Nổi Bật</h2>
        <div className="text-muted-foreground animate-fade-in">Không thể tải dữ liệu. Vui lòng thử lại sau.</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center bg-background px-4 md:px-16 py-4">
      <h2 className="text-2xl md:text-3xl font-bold leading-normal mb-4">Nhà Tuyển Dụng Nổi Bật</h2>

      <Carousel className="w-full max-w-[1440px]" setApi={setApi}>
        <CarouselContent>
          {recruiters?.map((recruiter) => (
            <CarouselItem key={recruiter.id} className="relative">
              <div className="flex h-[300px] items-end rounded-lg overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  role="img"
                  aria-label={`${recruiter.company.name} background`}
                  style={{ backgroundImage: `url(${recruiter.backgroundUrl || recruiter.company.backgroundCompany})` }}
                />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
                  {/* Company Logo */}
                  <a
                    href={recruiter.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg p-2 hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      alt={`${recruiter.company.name} logo`}
                      src={recruiter.company.logoCompany || "/placeholder.svg"}
                      className="w-full h-full object-contain"
                    />
                  </a>

                  {/* Company Info */}
                  <div className="text-white text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">{recruiter.company.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-2 justify-center md:justify-start">
                      {recruiter.company.industries.map((industry) => (
                        <span key={industry.id} className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                          {industry.name}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm line-clamp-2 mb-2">{recruiter.company.description}</p>
                    <a
                      href={recruiter.company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {recruiters?.map((_, index) => (
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
    </div>
  )
}