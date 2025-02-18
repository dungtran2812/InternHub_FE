import CompanyCard from '../../../components/CompanyCard'
import JobSearchBar from '@/components/JobSearchBar'
import PremiumSubCard from '@/components/PremiumSubCard'
import FreePlanCard from '@/components/FreePlanCard'
import RecruiterCard from '@/components/RecruiterCard'
import HomeBanner from '@/components/HomeBanner'
import JobFunctionCarousel from '@/components/JobFunctionCarousel'
import RecruiterCarousel from '@/components/RecruiterCarousel'
import CareerConsultingCard from '@/components/CareerConsultingCard'
import JobCarousel from '@/components/JobCarousel'

const Home = () => {
  return (
    <>
      <HomeBanner />
      <JobFunctionCarousel />
      <JobCarousel />
      <RecruiterCarousel />
      <RecruiterCard
        name="Alipo Creative"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubhAFso_7zGCtcA5a1mopHOLsPXhdtVZxqA&s"
        location="Thành phố Hồ Chí Minh"
        jobsAvailable={42}
        field="Thiết kế & Sáng tạo"
      />
      <CompanyCard
        name="Alipo Creative"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubhAFso_7zGCtcA5a1mopHOLsPXhdtVZxqA&s"
        address="The Grand Riverside, 283 Bến Vân Đồn, Phường 2, Quận 4, Thành phố Hồ Chí Minh"
        phoneNumber="090 707 0245"
        email="info@alipo.vn"
        type="Thiết kế & Sáng tạo"
        website="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubhAFso_7zGCtcA5a1mopHOLsPXhdtVZxqA&s"
        employees="500+ nhân viên"
        baseColor="bg-red-500"
      />
      <JobSearchBar />
      <PremiumSubCard />
      <div>
        <FreePlanCard />
      </div>
      <div className='mx-3'>
        <div className='mt-10 container mx-auto '>
          <div className='text-3xl flex justify-between'>
            <div className=' font-bold'>
              Tư vấn nghề nghiệp
            </div>
            <div className='text-xl hover:text-orange-400 cursor-pointer'>
              Xem tất cả
            </div>
          </div>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1" gap-10 mt-5'>
            <CareerConsultingCard
              title={"Những thời điểm vàng để chuyển việc trong năm, bạn đã biết?"}
              slogan={'Tìm Việc Thông Minh'}
              description={"Không phải lúc nào chúng ta cũng tìm được công việc như ý ngay từ đầu, nhiều lúc chuyển việc mới chính là sự lựa chọn tốt nhất. Tuy nhiên, nhu cầu tuyển dụng của các công ty luôn lên xuống thất thường nhất là trong thời điểm kinh tế khó khăn như hiện nay. Trong một năm, sẽ có những lúc các công ty ồ ạt tuyển dụng, nhưng có lúc lại chẳng tuyển dụng vị trí nào. Nhảy việc nhầm mùa tuyển dụng sẽ khiến bạn chật vật tìm việc, thậm chí tình trạng này còn kéo dài đến cả tháng trời."}
              image={"https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fwww.vietnamworks.com%2Fhrinsider%2Fwp-content%2Fuploads%2F2021%2F10%2F8-1200x628-2.jpg&w=384&q=75"}
            />
            <CareerConsultingCard
              title={"Những thời điểm vàng để chuyển việc trong năm, bạn đã biết?"}
              slogan={'Tìm Việc Thông Minh'}
              description={"Không phải lúc nào chúng ta cũng tìm được công việc như ý ngay từ đầu, nhiều lúc chuyển việc mới chính là sự lựa chọn tốt nhất. Tuy nhiên, nhu cầu tuyển dụng của các công ty luôn lên xuống thất thường nhất là trong thời điểm kinh tế khó khăn như hiện nay. Trong một năm, sẽ có những lúc các công ty ồ ạt tuyển dụng, nhưng có lúc lại chẳng tuyển dụng vị trí nào. Nhảy việc nhầm mùa tuyển dụng sẽ khiến bạn chật vật tìm việc, thậm chí tình trạng này còn kéo dài đến cả tháng trời."}
              image={"https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fwww.vietnamworks.com%2Fhrinsider%2Fwp-content%2Fuploads%2F2021%2F10%2F8-1200x628-2.jpg&w=384&q=75"}
            />
            <CareerConsultingCard
              title={"Những thời điểm vàng để chuyển việc trong năm, bạn đã biết?"}
              slogan={'Tìm Việc Thông Minh'}
              description={"Không phải lúc nào chúng ta cũng tìm được công việc như ý ngay từ đầu, nhiều lúc chuyển việc mới chính là sự lựa chọn tốt nhất. Tuy nhiên, nhu cầu tuyển dụng của các công ty luôn lên xuống thất thường nhất là trong thời điểm kinh tế khó khăn như hiện nay. Trong một năm, sẽ có những lúc các công ty ồ ạt tuyển dụng, nhưng có lúc lại chẳng tuyển dụng vị trí nào. Nhảy việc nhầm mùa tuyển dụng sẽ khiến bạn chật vật tìm việc, thậm chí tình trạng này còn kéo dài đến cả tháng trời."}
              image={"https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fwww.vietnamworks.com%2Fhrinsider%2Fwp-content%2Fuploads%2F2021%2F10%2F8-1200x628-2.jpg&w=384&q=75"}
            />
            <CareerConsultingCard
              title={"Những thời điểm vàng để chuyển việc trong năm, bạn đã biết?"}
              slogan={'Tìm Việc Thông Minh'}
              description={"Không phải lúc nào chúng ta cũng tìm được công việc như ý ngay từ đầu, nhiều lúc chuyển việc mới chính là sự lựa chọn tốt nhất. Tuy nhiên, nhu cầu tuyển dụng của các công ty luôn lên xuống thất thường nhất là trong thời điểm kinh tế khó khăn như hiện nay. Trong một năm, sẽ có những lúc các công ty ồ ạt tuyển dụng, nhưng có lúc lại chẳng tuyển dụng vị trí nào. Nhảy việc nhầm mùa tuyển dụng sẽ khiến bạn chật vật tìm việc, thậm chí tình trạng này còn kéo dài đến cả tháng trời."}
              image={"https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fwww.vietnamworks.com%2Fhrinsider%2Fwp-content%2Fuploads%2F2021%2F10%2F8-1200x628-2.jpg&w=384&q=75"}
            />

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
