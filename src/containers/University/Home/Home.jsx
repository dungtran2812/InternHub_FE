import AdminNumberTotalCard from "@/components/AdminNumberTotalCard"
import LineChart from "@/components/LineChart"
import UniversityJD from "@/components/UniversityJD"

const UniversityHomePage = () => {
    return (
        <div className="m-10">
            <div className="font-bold text-3xl">
                Recent posts
            </div>
            <div className="grid grid-cols-3 mt-5">
                <UniversityJD
                    descriptions={["GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP"
                    ]}
                />
                <UniversityJD
                    descriptions={["GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP",
                        "GRAPHIC DESIGN INTERNSHIP"
                    ]}
                />
                <UniversityJD
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
        </div>
    )
}

export default UniversityHomePage
