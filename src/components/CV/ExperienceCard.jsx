import { Form, Input } from "antd";

const ExperienceCard = () => {
    return (
        <div className="p-2 hover:border-2 hover:border-solid rounded-md mt-5">
            <div className="border-t border-b border-green-600  pl-2 text-lg font-semibold">
                Kinh nghiệm làm việc
            </div>
            <div className="mt-5 p-2 border-2 border-solid rounded-md">
                <div className="grid grid-cols-12 gap-2 items-center">
                    {/* Form Item 1 */}
                    <Form.Item className="col-span-3 m-0" name="time_start">
                        <Input placeholder="Bắt đầu" className="rounded-lg p-1 text-xs w-[168px]" />
                    </Form.Item>
                    {/* Form Item 2 */}
                    <Form.Item className="col-span-3 m-0" name="time_end">
                        <Input placeholder="Kết thúc" className="rounded-lg p-1 text-xs w-[168px]" />
                    </Form.Item>

                    {/* Form Item 3 */}
                    <Form.Item
                        className="col-span-6 m-0 "
                        name="job_position"
                        rules={[{ required: true, message: "Vui lòng nhập vị trí công việc!" }]}
                    >
                        <Input placeholder="Vị trí công việc" className="rounded-lg p-1 text-xs w-[357px]" />
                    </Form.Item>
                </div>
                <div className="grid grid-cols-12 gap-2 items-center">
                    <Form.Item className="col-span-4 m-0" name="time_start">
                        <Input placeholder="Tên công ty" className="rounded-lg p-1 text-xs w-[235px]" />
                    </Form.Item>
                    <Form.Item
                        className="col-span-8 m-0 "
                        name="job_position"
                        rules={[{ required: true, message: "Vui lòng nhập vị trí công việc!" }]}
                    >
                        <Input placeholder="Mô tả công việc của bạn" className="rounded-lg p-1 text-xs w-[478px]" />
                    </Form.Item>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
