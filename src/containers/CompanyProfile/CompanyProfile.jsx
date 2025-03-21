import DonutChart from "@/components/DonutChart"
import PurpleButton from "@/components/PurpleButton"

const CompanyProfile = () => {
  return (
   <div className="mx-3">
    <div className="mt-10 container mx-auto">
      <div className="w-full p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-10">
        <div className="col-span-2">
          <img src="data:image/png;base64,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" alt="" />
        </div>
        <div className="col-span-7 text-blue-800 grid grid-cols-8">
          <div className="col-span-6">
            <p className="text-3xl font-bold p-2 ">
              Alipo Creative
            </p>
            <p className="p-2">
              <span className="font-bold"> Address:</span> The Grand Riverside, 283 Ben Van Don, Ward 2, District 4, Ho Chi Minh City
            </p>
            <p className="p-2">
              <span className="font-bold"> Phone number:</span> 090 707 0245
            </p>
            <p className="p-2">
              <span className="font-bold"> Email: </span>info@alipo.vn
            </p>
            <p className="p-2">
              500+ employees
            </p>
          </div>
          <div className="col-span-2">
            <p className="py-14"><span className="font-bold ">Type:</span> Design & Creation</p>
            <p><span className="font-bold">Web:</span>www.alipo.vn</p>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-2">
          <PurpleButton text={"Follow"} />
          <PurpleButton text={"See all jobs"} />
        </div>
      </div>

      <div className="w-96  mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <DonutChart />
        <DonutChart />
      </div>

    </div>
   </div>
  )
}

export default CompanyProfile
