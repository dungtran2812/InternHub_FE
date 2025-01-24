import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { JobCard } from "./JobCard"

const SAMPLE_JOBS = [
  {
    id: "1",
    title: "Trưởng Phòng Tổ Chức",
    company: "Công Ty Cổ Phần Phát Triển Chăn",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "900-1,400 đ/tháng",
    locations: ["Hồ Chí Minh", "Bình Dương"],
  },
  {
    id: "2",
    title: "Trưởng Phòng Hành Chính",
    company: "Công Ty Cổ Phần Giấy CP",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "$ 25tr-40tr /tháng",
    locations: ["Hồ Chí Minh"],
  },
  {
    id: "3",
    title: "HR Manager",
    company: "CÔNG TY TNHH SOKO GROUP",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "Thương lượng",
    locations: ["Hồ Chí Minh"],
  },
  {
    id: "4",
    title: "Trưởng phòng Nhân Sự",
    company: "Công Ty Cổ Phần Nhựa Á Đông",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "Thương lượng",
    locations: ["Hồ Chí Minh", "Hà Nội", "Hưng Yên"],
  },
  {
    id: "5",
    title: "HR Manager",
    company: "Công Ty Cổ Phần Y Khoa Hoàn Mỹ",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "Thương lượng",
    locations: ["Cà Mau", "Đồng Nai", "Hồ Chí Minh"],
  },
  {
    id: "6",
    title: "Trưởng Bộ phận Hành Chính",
    company: "CÔNG TY TNHH GREENOVATION",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "Thương lượng",
    locations: ["Đồng Nai"],
  },
  {
    id: "7",
    title: "Trưởng Phòng Đối Tác Nhân Sự",
    company: "Công Ty TNHH TM DV Tân Hiệp Phát",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "Thương lượng",
    locations: ["Bình Dương"],
  },
  {
    id: "8",
    title: "Trưởng Phòng Hành Chính",
    company: "Công Ty CP Thực Phẩm Richy Miền Nam",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "$ 500-1,200 /tháng",
    locations: ["Hồ Chí Minh"],
  },
  {
    id: "9",
    title: "Giám Đốc Hành Chính Nhân Sự",
    company: "Công Ty Cổ Phần Phúc Sinh",
    companyLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uUcpCV4FJJxdxaWdBq7y5syphq1l0E.png",
    salary: "40tr-55tr đ/tháng",
    locations: ["Hồ Chí Minh"],
  },
]

// Split jobs into groups of 9 for pagination
const JOBS_PER_PAGE = 9
const jobPages = Array.from({ length: Math.ceil(SAMPLE_JOBS.length / JOBS_PER_PAGE) }, (_, i) =>
  SAMPLE_JOBS.slice(i * JOBS_PER_PAGE, (i + 1) * JOBS_PER_PAGE),
)

export function JobCarousel() {
  return (
    <div className="text-2xl font-bold mb-4 text-center my-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Việc Làm Gợi Ý</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[1200px] mx-auto"
      >
        <CarouselContent>
          {jobPages.map((jobs, pageIndex) => (
            <CarouselItem key={pageIndex} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
        <div className="mt-8 flex justify-center gap-2">
          {jobPages.map((_, index) => (
            <div key={index} className={`h-2 w-2 rounded-full ${index === 0 ? "bg-blue-600" : "bg-gray-300"}`} />
          ))}
        </div>
      </Carousel>
    </div>
  )
}

