import VARIABLE from '@/consts/variable'
import { ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons'
import React from 'react'

const JobPostDetail = () => {
    return (
        <div className='m-10'>
            <div className="text-3xl text-blue-900 font-bold">
                Job Post Detail
            </div>
            <div className='grid grid-cols-12 gap-8 mt-10'>
                <div className='col-span-9 border border-solid rounded-xl p-5 grid grid-cols-12 '>
                    <div className='col-span-4 flex justify-center'>
                        <img src={VARIABLE.ALIPO_IMAGE} alt="logo" />
                    </div>
                    <div className='col-span-8'>
                        <div className='text-3xl font-bold'>
                            GRAPHIC DESIGN INTERNSHIP
                        </div>
                        <div className='text-2xl text-blue-900 mt-2'>
                            Alipo Creative Company
                        </div>
                        <div className='text-xl text-blue-900 mt-2'>
                            Design & Creation
                        </div>
                        <div className='text-2xl text-blue-900 mt-2'>
                            Negotiate
                        </div>
                    </div>
                    <div className='border border-solid rounded-xl p-5 mt-10 col-span-12'>
                        <div>
                            <div>
                                <EnvironmentOutlined className='text-blue-900' /> The Grand Riverside, 283 Ben Van Don, Ward 2, District 4, Ho Chi Minh City
                            </div>
                        </div>
                        <div>
                            <div>
                                <ClockCircleOutlined className='text-blue-900' /> 1 hours ago
                            </div>
                        </div>
                        <div className='text-blue-900'>
                            <div className='mt-5'>
                                <span className='font-bold'>Quantity:</span> 5
                            </div>
                            <div className='mt-5'>
                                <span className='font-bold  '>Suitable majors:</span> Graphic Design
                                , Digital Art Design
                            </div>
                            {/* Job Description */}
                            <div className='mt-5'>
                                <span className='font-bold '>Job Description:
                                    :</span>
                                <div>
                                    {
                                        JD.map((item) => (
                                            <div className='mt-5'>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Requirements */}
                            <div className='mt-5'>
                                <span className='font-bold '>Requirements:
                                    :</span>
                                <div>
                                    {
                                        Requirements.map((item) => (
                                            <div className='mt-5'>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Benefits */}
                            <div className='mt-5'>
                                <span className='font-bold'>Benefits:
                                    :</span>
                                <div>
                                    {
                                        Benefits.map((item) => (
                                            <div className='mt-5'>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 border border-solid rounded-xl p-10  justify-items-center '>
                    <div>
                        <button type="button" class="text-white 2xl:w-52 lg:w-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2  focus:outline-none ">
                            Approve
                        </button>
                    </div>
                    <div>
                        <button type="button" class="2xl:w-52 lg:w-32 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 ">
                            Cancel
                        </button>
                    </div>
                    <div className='w-80 2xl:w-64 xl:w-48 lg:w-40 md:w-32 sm:w-24 border border-solid rounded-xl p-5'>
                        <div>
                            Type reason here...
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const JD = ["Work with Art Director, Creative Director on art direction, design direction Join the team on corporate and brand branding design (logo design, brand guidelines, brand applications, ...)",
    "Join the team on product design for esport tournaments (logo design, social banner design, ...)",
    "Join the team on design for animated videos, explainer videos, .."
]

const Requirements = ["Knowledge of color theory, typography, layout",
    "Experience working in a team",
    "English document reading skills",
    "English communication skills are an advantage",
    "Knowledge of playing games is an advantage"
]

const Benefits = ["Always be creative and try new things.",
    "Work in a young, professional, friendly and dynamic environment. Regularly participate in picnics, parties, and general activities of the company.",
    "Bonuses are calculated for each project when participating in actual projects depending on the performance of the contribution (will be decided by the team leader)",
]
export default JobPostDetail