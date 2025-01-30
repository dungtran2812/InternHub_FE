import AdminCandidateFeedback from "@/components/AdminCandidateFeedback"
import AdminJD from "@/components/AdminJD"
import AdminNumberTotalCard from "@/components/AdminNumberTotalCard"
import LineChart from "@/components/LineChart"

const Dashboard = () => {
    return (
        <div className="m-10">
            <div className="font-bold text-3xl">
                Recent posts
            </div>
            <div className="grid grid-cols-3 mt-5">
                <AdminJD
                    descriptions={["GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP"
                    ]}
                />
                <AdminJD
                    descriptions={["GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP"
                    ]}
                />
                <AdminJD
                    descriptions={["GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP"
                    ]}
                />
            </div>
            <div className="grid grid-cols-3 mt-10">
                <AdminNumberTotalCard
                    number={103}
                    name={"Total Interns"}
                />
                <AdminNumberTotalCard
                    number={103}
                    name={"Recruitment posts"}
                />
                <AdminNumberTotalCard
                    number={103}
                    name={"Intern’s feedback"}
                />

            </div>
            <div className="mt-10" style={{ width: "550px" }}>
                <LineChart />
            </div>
            <div>
                <div className="mt-10 font-bold text-3xl">
                    Candidate Feedback
                </div>
                <div className="mt-10 grid grid-cols-3">
                    <AdminCandidateFeedback feedback={"I had a positive experience working at Alipo. The friendly work environment and supportive team helped me quickly develop my skills. The company emphasizes training and encourages employees to contribute ideas. "} />
                    <AdminCandidateFeedback feedback={"I had a positive experience working at Alipo. The friendly work environment and supportive team helped me quickly develop my skills. The company emphasizes training and encourages employees to contribute ideas. "} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
