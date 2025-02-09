import { Avatar, Table, } from "antd";
import { Select } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const ManageIntern = () => {
    const dataSource = Array.from({ length: 10 }, (_, index) => ({
        key: index + 1,
        number: index + 1,
        fullName: "Nguyễn Văn A",
        studentCode: "1234567",
        cv: "CV",
        Company: "Alipo Creative Comp...",
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
            title: "Full Name",
            dataIndex: "fullName",
            key: "fullName",
        },
        {
            title: "Student Code",
            dataIndex: "studentCode",
            key: "studentCode",
        },
        {
            title: "CV",
            dataIndex: "cv",
            key: "cv",
        },
        {
            title: "Company",
            dataIndex: "Company",
            key: "Company",
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: () => (
                <div className="text-yellow-400 font-medium">
                    In progress
                </div>
            )
        },
    ];

    return (
        <div className="m-10">
            <div className="flex justify-between">
                <button className="text-blue-800 ">Data Table</button>
                <button className="text-blue-800 ">Export excel</button>
            </div>
            <Table className="mt-10" dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    );
};

export default ManageIntern;
