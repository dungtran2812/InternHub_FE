import React from "react";
import { Table, Tag } from "antd";
import { useGetAllJobQuery } from "@/services/internHubApi";
import { useSelector } from "react-redux";

const ManageJob = () => {
    const companyId = useSelector((state) => state.rootReducer.user.company.id)
    console.log("companyId: ", companyId)
    const { data: jobs } = useGetAllJobQuery()
    const jobsFilter = jobs?.filter((item)=>item?.company?.id === companyId)
    const columns = [
        {
            title: "Tiêu đề công việc",
            dataIndex: "jobTitle",
            key: "jobTitle",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Yêu cầu",
            dataIndex: "requirement",
            key: "requirement",
        },
        {
            title: "Thời hạn",
            dataIndex: "duration",
            key: "duration",
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Địa điểm",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Mức lương",
            dataIndex: "salary",
            key: "salary",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={status === "OPEN" ? "green" : "red"}>{status}</Tag>
            ),
        },
        {
            title: "Chức năng công việc",
            dataIndex: ["jobFunction", "name"],
            key: "jobFunction",
        },
        {
            title: "Ngành nghề",
            dataIndex: ["industry", "name"],
            key: "industry",
        },
    ];

    return (
        <div className="mx-20 mt-10">
            <div className="text-3xl text-center mb-10 font-semibold">
                Quản lý công việc
            </div>
            <Table columns={columns} dataSource={jobsFilter} />;
        </div>
    )
};

export default ManageJob;