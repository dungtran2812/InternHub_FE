import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const EducationCard = () => {
    return (
        <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
            <div className='border-t border-b border-green-600 py pl-2 text-lg font-semibold'>
                Học vấn
            </div>
            <div className="mt-5">
                <Form.Item
                    name="school_name"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <Input placeholder='Tên trường học' className='rounded-lg p-1 text-xs' />
                    </div>
                </Form.Item>
            </div>
            <div className="mt-1">
                <Form.Item
                    name="specialized"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <Input placeholder='Ngành học / Môn học' className='rounded-lg p-1 text-xs' />
                    </div>
                </Form.Item>
            </div>
            <div className="mt-1">
                <Form.Item
                    name="time"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <Input placeholder='Bắt đầu' className='rounded-lg p-1 text-xs w-[100px]' />
                        <div>
                            -
                        </div>
                        <Input placeholder='Kết thúc' className='rounded-lg p-1 text-xs w-[100px]' />
                    </div>
                </Form.Item>
            </div>
            <div className="mt-1">
                <Form.Item
                    className='w-full m-0'
                    name="social_media_link"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <TextArea placeholder='Mô tả quá trình học tập hoặc thành tích của bạn' />
                    </div>
                </Form.Item>
            </div>
        </div>
    )
}

export default EducationCard
