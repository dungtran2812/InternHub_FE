import RequiredKnowledge from "./RequiredKnowledge"

const JobCard = ({ jobName, companyAvatar, companyName, category, requiredKnowledge, salary, location }) => {
    return (
        <div style={{ width: "600px" }} className="mb-10 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="font-bold pb-5 text-2xl">
                {jobName}
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <img className="border-2 border-solid rounded-lg " src={companyAvatar} alt="image" />
                </div>
                <div className="col-span-9 pl-2 ">
                    <p className="text-blue-900">{companyName}</p>
                    <p className="text-gray-300 text-xs">{category}</p>
                    <p className="border-2 border-solid mt-2"></p>
                    <p className="my-2">{salary === "" ? "Negotiate" : salary} $</p>
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 flex">
                        {Array.isArray(requiredKnowledge) && requiredKnowledge.map((item, index) => (
                            <div key={index} className="mr-2">
                                <RequiredKnowledge text={item} />
                            </div>
                        ))}
                        </div>
                        <div className="col-span-4 float-right">
                            <div className="flex items-center text-xs pl-2 ">
                                <svg style={{ color: "#b3afbe" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div style={{ color: "#b3afbe" }} className="pl-2 ">
                                    {location}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
