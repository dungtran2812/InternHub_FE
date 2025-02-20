import { Form, Input } from 'antd';
const Certificate = () => {
    return (
        <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
            <div className='border-t border-b border-green-600  pl-2 text-lg font-semibold'>
            Chứng chỉ
            </div>
            <div className="mt-5">
                <Form.Item
                    name="school_name"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className=''>
                        <Input placeholder='Thời gian' className='rounded-lg p-1  w-[359px] text-xs' />
                    </div>
                </Form.Item>
            </div>
            <div className="mt-1">
                <Form.Item
                    name="specialized"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className=''>
                        <Input placeholder='Tên chứng chỉ' className='rounded-lg p-1  w-[359px] text-xs' />
                    </div>
                </Form.Item>
            </div>
        </div>
    )
}

export default Certificate
