const CompanyJobCard = ({ img, job_title, link, salary, location, updatedAt, company_name }) => {
  return (
    <div className="border border-solid rounded-lg p-3 grid grid-cols-12 gap-4 mt-2">
      <div className="col-span-2">
        <img  src={img} alt="" />
      </div>
      <div className="col-span-10">
        <div className="text-xl font-semibold hover:text-red-500">
          {job_title}
        </div>
        <div className="flex gap-1 hover:text-red-500">
          <div>
            {company_name}
          </div>
          <div>
            -
          </div>
          <div className="">
            {link}
          </div>
        </div>
        {/* salary */}
        <div className=" flex gap-1">
          <div>
            {salary === 0 ? <div className="text-red-500">Negotiable</div> : salary}
          </div>
          <div>
            |
          </div>
          <div>
            {location}
          </div>
        </div>
        {/* Updated */}
        <div className="flex gap-1">
          <div>
            Updated: {updatedAt}
          </div>
          <div>
            |
          </div>
          {/* <div>
          {categories.map((item) => (
            <>

            </>
          ))}
        </div> */}
        </div>
      </div>

    </div>
  )
}

export default CompanyJobCard
