import React, { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import backButton from "@/assets/backButton.svg"
import nextButton from "@/assets/nextButton.svg"
import carouselDot from "@/assets/carouselDot.svg"

const categories = [
  { name: "Digital Marketing", icon: "/placeholder.svg?height=40&width=40", jobs: 12 },
  { name: "International Business", icon: "/placeholder.svg?height=40&width=40", jobs: 8 },
  { name: "Language", icon: "/placeholder.svg?height=40&width=40", jobs: 15 },
  { name: "Public Relations", icon: "/placeholder.svg?height=40&width=40", jobs: 6 },
  { name: "Software Engineering", icon: "/placeholder.svg?height=40&width=40", jobs: 25 },
  { name: "Graphic Design", icon: "/placeholder.svg?height=40&width=40", jobs: 18 },
  { name: "Hotel Management", icon: "/placeholder.svg?height=40&width=40", jobs: 10 },
  { name: "Marketing Communication", icon: "/placeholder.svg?height=40&width=40", jobs: 9 },
  { name: "Data Science", icon: "/placeholder.svg?height=40&width=40", jobs: 14 },
  { name: "Human Resources", icon: "/placeholder.svg?height=40&width=40", jobs: 7 },
  { name: "Finance", icon: "/placeholder.svg?height=40&width=40", jobs: 16 },
  { name: "Project Management", icon: "/placeholder.svg?height=40&width=40", jobs: 11 },
  { name: "Content Writing", icon: "/placeholder.svg?height=40&width=40", jobs: 13 },
  { name: "UI/UX Design", icon: "/placeholder.svg?height=40&width=40", jobs: 20 },
  { name: "Sales", icon: "/placeholder.svg?height=40&width=40", jobs: 17 },
  { name: "Customer Service", icon: "/placeholder.svg?height=40&width=40", jobs: 22 }
]

export default function JobCategoryCarousel() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const totalSlides = Math.ceil(categories.length / 8)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="flex flex-col items-center justify-center bg-background px-16 py-4">
      <Carousel className="w-full max-w-[1440px]" setApi={setApi}>
        <CarouselContent>
          {[...Array(totalSlides)].map((_, slideIndex) => (
            <CarouselItem key={slideIndex}>
              <div className="grid grid-cols-4 grid-rows-2 gap-8 px-4">
                {categories
                  .slice(slideIndex * 8, (slideIndex + 1) * 8)
                  .map((category, index) => (
                    <Card key={index} className="w-[280px] h-[100px] border border-[#6267D8] rounded-[12px]">
                      <CardContent className="flex items-center justify-start p-4 h-full">
                        <img src={category.icon} alt={category.name} className="w-8 h-8 mr-4" />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">{category.name}</span>
                          <span className="text-xs text-muted-foreground">{category.jobs} jobs available</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:flex">
          <img src={backButton} alt="Previous" className="w-7 h-12" />
        </CarouselPrevious>
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 hidden sm:flex">
          <img src={nextButton} alt="Next" className="w-7 h-12" />
        </CarouselNext>
      </Carousel>
      <div className="flex justify-center mt-4">
        {[...Array(totalSlides)].map((_, index) => (
          <img 
            key={index} 
            src={carouselDot} 
            alt="Dot" 
            className={`w-[17px] h-[17px] mx-1 ${current === index ? 'opacity-100' : 'opacity-50'}`}
          />
        ))}
      </div>
    </div>
  )
}