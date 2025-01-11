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
        location="Ho Chi Minh City"
        jobsAvailable={42}
        field="Design & Creation"
      />
      <CompanyCard
        name="Alipo Creative"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubhAFso_7zGCtcA5a1mopHOLsPXhdtVZxqA&s"
        address="The Grand Riverside, 283 Ben Van Don, Ward 2, District 4, Ho Chi Minh City"
        phoneNumber="090 707 0245"
        email="info@alipo.vn"
        type="Design & Creation"
        website="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubhAFso_7zGCtcA5a1mopHOLsPXhdtVZxqA&s"
        employees="500+ employees"
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