import React, { useState } from "react";
import { Avatar, Table, Modal, Button, Select, Tag } from "antd";
import { useGetAppilcationQuery, usePutApplicationMutation } from "@/services/internHubApi";
import PdfPreview from "@/components/PdfPreview";
import { Link } from "react-router-dom";

const ManageApplication = () => {
    const [isStudentModalVisible, setIsStudentModalVisible] = useState(false);
    const [isJobModalVisible, setIsJobModalVisible] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const { data: dataSource, isLoading: isLoading } = useGetAppilcationQuery()
    const [updateStatus, { isLoading: isApplying, isSuccess: isApplySuccess, isError: isApplyError }] = usePutApplicationMutation()
    console.log("dataSource: ", dataSource)
    if (isLoading || isApplying) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                Loading ...
            </div>
        )
    }
    const columns = [
        {
            title: "Full Name",
            dataIndex: "fullName",
            key: "fullName",
            render: (text, record) => (
                <Button type="link" onClick={() => showStudentModal(record.student)}>
                    {record?.student?.fullName}
                </Button>
            )
        },
        {
            title: "Ảnh đại diện",
            render: (record) => (
                <div className="flex justify-between items-center">
                    <div>
                        <Avatar size="32" src={record?.student?.avtUrl === "" ? "https://avatars.githubusercontent.com/u/155450761?v=4" : record?.student?.avtUrl} />
                    </div>
                </div>
            )
        },
        // {
        //     title: "CV",
        //     dataIndex: "cv",
        //     key: "cv",
        // },
        {
            title: "CV",
            render: (record) => (
                <div className="flex justify-between items-center">
                     <Link to={record?.student?.resume}> 
                                           <PdfPreview   pdfUrl={record?.student?.resume}/>
                                           </Link>
                </div>
            )
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status) => (
                <Tag color={status === "PENDING" ? "yellow" : status === "ACCEPT" ? "green" : "red"}>{status}</Tag>
            )
        },
        {
            title: "Job",
            dataIndex: "job",
            render: (job) => (
                <Button type="link" onClick={() => showJobModal(job)}>
                    {job.jobTitle}
                </Button>
            )
        },
        {
            title: "Hành động",
            render: (job) => (
                <div className="flex gap-2">
                    <Button type="primary" onClick={() => handleUpdate(job.id, "ACCEPT")}>
                        Accept
                    </Button>
                    <Button type="default" onClick={() => handleUpdate(job.id, "REJECT")}>
                        Reject
                    </Button>
                </div>
            )
        },
    ];
    const handleUpdate = async (id, status) => {
        console.log(id, status)
        const response = await updateStatus({ id: id, credentials: status }).unwrap();
        if (response) {
            window.location.reload()
            console.log("handleUpdate: ", response)
        }
    }
    const showStudentModal = (student) => {
        setSelectedStudent(student);
        setIsStudentModalVisible(true);
    };

    const showJobModal = (job) => {
        setSelectedJob(job);
        setIsJobModalVisible(true);
    };

    const handleStudentModalOk = () => {
        setIsStudentModalVisible(false);
    };

    const handleJobModalOk = () => {
        setIsJobModalVisible(false);
    };

    return (
        <div className="m-10">
            {/* <div className="flex justify-between">
                <button className="text-blue-800">Data Table</button>
                <button className="text-blue-800">Export excel</button>
            </div> */}
            <div className="text-3xl font-semibold text-center">
                Quản lý đơn ứng tuyển
            </div>
            <Table className="mt-10" dataSource={dataSource.content} columns={columns}  />

            {/* Student Modal */}
            <Modal
                title="Student Details"
                visible={isStudentModalVisible}
                onOk={handleStudentModalOk}
                onCancel={handleStudentModalOk}
            >
                {selectedStudent && (
                    <div>
                        <p><strong>Full Name:</strong> {selectedStudent?.fullName}</p>
                        <p><strong>Email:</strong> {selectedStudent?.email}</p>
                        <p><strong>Phone:</strong> {selectedStudent?.phone}</p>
                        <p><strong>Major:</strong> {selectedStudent?.major}</p>
                        <p><strong>GPA:</strong> {selectedStudent?.gpa}</p>
                        <p><strong>Premium Status:</strong> {selectedStudent?.isPremium ? "Yes" : "No"}</p>
                        {selectedStudent?.avtUrl && (
                            <img src={selectedStudent?.avtUrl} alt="Avatar" style={{ width: 100 }} />
                        )}
                    </div>
                )}
            </Modal>

            {/* Job Modal */}
            <Modal
                title="Job Details"
                visible={isJobModalVisible}
                onOk={handleJobModalOk}
                onCancel={handleJobModalOk}
            >
                {selectedJob && (
                    <div>
                        <p><strong>Job Title:</strong> {selectedJob?.jobTitle}</p>
                        <p><strong>Description:</strong> {selectedJob?.description}</p>
                        <p><strong>Requirements:</strong> {selectedJob?.requirement}</p>
                        <p><strong>Location:</strong> {selectedJob?.location}</p>
                        <p><strong>Duration:</strong> {selectedJob?.duration}</p>
                        <p><strong>Company:</strong> {selectedJob?.company.name}</p>
                        <p><strong>Company Address:</strong> {selectedJob?.company.address}</p>
                        <p><strong>Company Description:</strong> {selectedJob?.company.description}</p>
                        {selectedJob?.company.logoCompany && (
                            <img src={selectedJob?.company.logoCompany} alt="Company Logo" style={{ width: 100 }} />
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ManageApplication;