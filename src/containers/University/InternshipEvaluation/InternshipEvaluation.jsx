import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Table, } from "antd";
import { Select } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const InternshipEvaluation = () => {
    const dataSource = Array.from({ length: 10 }, (_, index) => ({
        key: index + 1,
        number: index + 1,
        fullName: "Nguyễn Văn A",
        studentCode: "1234567",
        Company: "Alipo Creative...",
        Feedback: "AAAAAAAAAAAAAAAAAAA",
        Grade: "8.0"
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
            title: "Company",
            dataIndex: "Company",
            key: "Company",
        },
        {
            title: "Feedback",
            dataIndex: "Feedback",
            key: "Feedback",
        },
        {
            title: "Grade",
            dataIndex: "Grade",
            key: "Grade",
            render: (Grade) => (
                <div className="flex justify-between">
                    {Grade} <ArrowRightOutlined className="cursor-pointer" />
                </div>
            )
        },
    ];

    return (
        <div className="m-10">
            <div className="text-3xl text-blue-900 font-bold">
                Internship Evaluation
            </div>
            <Table className="mt-10" dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    );
};

export default InternshipEvaluation;
