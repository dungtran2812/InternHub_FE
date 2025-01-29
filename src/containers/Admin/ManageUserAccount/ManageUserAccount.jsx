import { Table, Button } from "antd";

const ManageUserAccount = () => {
  const dataSource = Array.from({ length: 10 }, (_, index) => ({
    key: index + 1,
    number: index + 1,
    fullName: "Nguyễn Văn A",
    studentCode: "1234567",
    school: "FPT University",
  }));

  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
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
      title: "School",
      dataIndex: "school",
      key: "school",
    },
    {
      title: "Action",
      key: "actions",
      render: () => (
        <div className="flex gap-2">
          <Button type="link" className="text-blue-500">
            Edit
          </Button>
          <Button type="link" danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="m-10">
      <div className="text-blue-800 text-3xl font-bold">User Accounts</div>
      <Table className="mt-10" dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default ManageUserAccount;
