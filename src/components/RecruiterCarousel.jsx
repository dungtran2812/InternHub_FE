import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import carouselDot from "@/assets/carouselDot.svg"

// Define your recruiters data
const recruiters = [
  {
    name: "Recruiter 1",
    backgroundImg: "https://channel.mediacdn.vn/428462621602512896/2023/4/12/image002-1681272925529843725697.jpg",
    companyLogo: "https://static.ybox.vn/2020/8/6/1597495475012-1581927973887-1581308594585-FPT_Software_Logo.png",
    tagline: "Together We Grow!",
    description: "Được thành lập vào năm 2000 với trụ sở tại Hà Nội và 02 chi nhánh ở TP Hồ Chí Minh và Đà Nẵng, IIG Việt Nam hiện là tổ chức hàng đầu trong lĩnh vực Khảo thí và Kiểm định giáo dục tại Việt Nam."
  },
  {
    name: "Recruiter 2",
    backgroundImg: "https://images.adsttc.com/media/images/5fad/c39d/63c0/1743/d100/0283/large_jpg/FI.jpg?1605223198",
    companyLogo: "https://yte.viettel.vn/upload/1000337/20210118/Viettel-without_slogan-01_34bf1bf614.png",
    tagline: "Innovating Healthcare",
    description: "Viettel là một trong những nhà cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, cung cấp nhiều giải pháp công nghệ cho ngành y tế.",
    jobs: 8
  },
  // Add more recruiters as needed
]

export default function RecruiterCarousel() {
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

  return (
    <div className="flex flex-col items-center justify-center bg-background px-16 py-4">
      <h2 className="text-3xl font-bold leading-normal mb-2">Nhà Tuyển Dụng Nổi Bật</h2>
      <Carousel className="w-full max-w-[1440px]" setApi={setApi}>
        <CarouselContent>
          {recruiters.map((recruiter, index) => (
            <CarouselItem key={index} className="relative">
              <div className="flex h-[300px] items-end">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  role="img"
                  aria-label={`Latest ${recruiter.name} tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.`}
                  style={{ backgroundImage: `url(${recruiter.backgroundImg})` }}
                ></div>
                <div className="relative z-10 flex justify-center items-center h-1/2 w-full bg-gradient-to-t from-black/60 to-transparent p-2">
                  <a href="#" rel="noreferrer" className="block w-32 h-32 overflow-hidden">
                    <img
                      alt={`Latest ${recruiter.name} tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.`}
                      src={recruiter.companyLogo}
                      className="object-contain w-full h-full"
                    />
                  </a>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{recruiter.name}</h3>
                    <div className="text-sm">{recruiter.tagline}</div>
                    <p className="mt-1 text-xs">
                      {recruiter.description} <a href="#" rel="noreferrer" className="text-blue-400">Xem thêm</a>
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4">
        {recruiters.map((_, index) => (
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
