import CompanyCard from '../../../components/CompanyCard'
import JobSearchBar from '@/components/JobSearchBar'
import JobCategoryBrowse from '@/components/JobCategoryBrowse'
import PremiumSubCard from '@/components/PremiumSubCard'
import FreePlanCard from '@/components/FreePlanCard'
import RecruiterCard from '@/components/RecruiterCard'

const Home = () => {
  return (
    <>
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
      <JobCategoryBrowse />
      <PremiumSubCard />
      <div>
        <FreePlanCard />
      </div>
    </>
  )
}

export default Home
