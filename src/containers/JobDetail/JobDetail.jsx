import VARIABLE from "@/consts/variable"
const JD = ["Work with Art Director, Creative Director on art direction, design direction Join the team on corporate and brand branding design (logo design, brand guidelines, brand applications, ...",
    "Join the team on product design for esport tournaments (logo design, social banner design, ...)",
    "Join the team on design for animated videos, explainer videos, .."
]
const REQ = ["Knowledge of color theory, typography, layout",
    "Experience working in a team",
    "English document reading skills",
    "English communication skills are an advantage",
    "Knowledge of playing games is an advantage"
]
const BENEFITS = ["Always be creative and try new things.",
    "Work in a young, professional, friendly and dynamic environment. Regularly participate in picnics, parties, and general activities of the company.",
    "Bonuses are calculated for each project when participating in actual projects depending on the performance of the contribution (will be decided by the team leader)",
]
const JobDetail = () => {
    return (
        <div className="mx-3 justify-items-center">
            <div style={{ width: "900px" }} className=" mt-10 mb-10 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
                        <img src={VARIABLE.FPT_IMAGE} alt="" />
                        <div className="pl-12 text-blue-800">
                            Negotiate
                        </div>
                    </div>
                    <div className="col-span-8 mt-10">
                        <p className="text-2xl font-bold"> GRAPHIC DESIGN INTERNSHIP</p>
                        <p className="text-xl text-blue-800">Alipo Creative Company</p>
                        <p className="text-blue-800">Design & Creation</p>
                        <div className="grid grid-cols-12 mt-16">
                            <button type="button" className="col-span-8 w-full  text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Apply
                            </button>
                            <div className="col-span-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 float-right text-blue-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 text-blue-800">
                    <div className="flex mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-purple-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p> The Grand Riverside, 283 Ben Van Don, Ward 2, District 4, Ho Chi Minh City</p>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-purple-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p> 1 hours ago</p>
                    </div>
                    <p className="pt-5 font-bold ">Quantity: 5</p>
                    <p className="pt-5  "><span className="font-bold">Suitable majors: </span>Graphic Design
                        , Digital Art Design</p>
                    <p className="pt-5  font-bold">Job Description:                    </p>
                    {Array.isArray(JD) && JD.map((item, index) => (
                        <div key={index} className="mr-2">
                            <p className="mt-5 ">{item}</p>
                        </div>
                    ))}
                    <p className="pt-5  font-bold">Requirements:   </p>
                    {Array.isArray(REQ) && REQ.map((item, index) => (
                        <div key={index} className="mr-2 ml-5">
                            <p className="mt-5 ">{item}</p>
                        </div>
                    ))}
                    <p className="pt-5  font-bold">Requirements:   </p>
                    {Array.isArray(BENEFITS) && BENEFITS.map((item, index) => (
                        <div key={index} className="mr-2 ml-5">
                            <p className="mt-5 ">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JobDetail
