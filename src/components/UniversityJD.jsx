
const UniversityJD = ({ descriptions }) => {
    return (
        <div className='border border-solid p-5 rounded-xl w-80'>
            <div className='font-bold text-xl'>
                Job Description
            </div>
            <div>
                {
                    descriptions.map((item, index) => {
                        return (
                            <div key={index} className="mt-5">
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-between mt-5">
                <div className=" text-green-500 cursor-pointer">
                    Approved
                </div>
                <div className=" text-blue-500 cursor-pointer">
                    See more
                </div>
            </div>
        </div>
    )
}

export default UniversityJD
