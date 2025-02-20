import { Form, Input } from 'antd';
const Skills = () => {
    return (
        <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
            <div className='border-t border-b border-green-600  pl-2 text-lg font-semibold'>
            Các kỹ năng
            </div>
            <div className="mt-5">
                <Form.Item
                    name="school_name"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <Input placeholder='Tên kĩ năng' className='rounded-lg p-1 text-xs' />
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
                        <Input placeholder='Mô tả kĩ năng' className='rounded-lg p-1 text-xs' />
                    </div>
                </Form.Item>
            </div>
        </div>
    )
}

export default Skills
