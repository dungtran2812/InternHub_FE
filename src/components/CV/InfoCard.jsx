import { Form, Input } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
const InfoCard = ({ title, email, }) => {
  return (
    <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
      <div className='border-t border-b border-green-600 pl-2 text-lg font-semibold'>
        {title}
      </div>
      <div className="mt-5">
        <Form.Item
          name="email"
          className='w-full m-0'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <div className='flex gap-4 w-[230px]'>
            <MailOutlined className='text-xl text-green-600' />
            <Input defaultValue={email} className='rounded-lg p-1 text-xs' />
          </div>
        </Form.Item>
      </div>
      <div className="mt-1">
        <Form.Item
          name="phone"
          className='w-full m-0'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <div className='flex gap-4 w-[230px]'>
            <PhoneOutlined className='text-xl text-green-600' />
            <Input placeholder='0123 456 789' className='rounded-lg p-1 text-xs' />
          </div>
        </Form.Item>
      </div>
      <div className="mt-1">
        <Form.Item
          name="location"
          className='w-full m-0'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <div className='flex gap-4 w-[230px]'>
            <GlobalOutlined className='text-xl text-green-600' />
            <Input placeholder='facebook.com/Internhub' className='rounded-lg p-1 text-xs' />
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
            <EnvironmentOutlined className='text-xl text-green-600' />
            <Input placeholder='Quận 12, TP.HCM' className='rounded-lg p-1 text-xs' />
          </div>
        </Form.Item>
      </div>
    </div>
  )
}

export default InfoCard
