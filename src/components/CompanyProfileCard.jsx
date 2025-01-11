
const CompanyProfileCard = ({
    name, description,
    image, location,
    numberJobAvailable
}) => {
    return (
        <div>
            <div className="w-72  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-center">
                    <img className="w-36 h-36" src={image} alt={"a"} />
                </div>
                <div className="mt-2 text-xl font-bold px-2 text-center ">
                    <p>{name}</p>
                </div>
                <div className="text-sm mt-2 px-2 text-center">
                    {description}
                </div>
                <div className="mt-10 grid grid-cols-6 pb-2">
                    <div className="col-span-3 flex items-center text-xs pl-2">
                        <svg style={{color: "#b3afbe"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <div style={{color: "#b3afbe"}} className="pl-2 ">
                        {location}
                        </div>
                    </div>
                    <div className="col-span-3 flex items-center justify-center text-xs text-blue-900">
                        {numberJobAvailable} jobs available
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfileCard
