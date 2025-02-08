import { Avatar, Table, } from "antd";
import { Select } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const UniversityManageJobPost = () => {
    const dataSource = Array.from({ length: 10 }, (_, index) => ({
        key: index + 1,
        number: index + 1,
        company_name: "Alipo Creative Company",
        jdp: "GRAPHIC DESIGN INTERNSHIP...",
        Status: "Status"
    }));

    const columns = [
        {
            title: "Number",
            dataIndex: "number",
            render: (number) => (
                <div className="flex justify-between items-center">
                    <div>
                        {number}
                    </div>
                    <div>
                        <Avatar size="32" src="https://avatars.githubusercontent.com/u/155450761?v=4" />
                    </div>
                </div>
            )
        },
        {
            title: "Company name",
            dataIndex: "company_name",
            key: "company_name",
        },
        {
            title: "Job description post",
            dataIndex: "jdp",
            key: "jdp",
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (record) => (
                <div className="text-green-400 font-bold">
                   Approve
                </div>
            )
        },
        {
            title: "Note",
            dataIndex: "note",
            key: "note",
        },
    ];

    return (
        <div className="m-10">
            <div className="text-3xl text-blue-900 font-bold">
            Manage job posts
            </div>
            <Table className="mt-10" dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    );
};

export default UniversityManageJobPost;
