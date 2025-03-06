import { Form, Input, Radio } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from '@ant-design/icons';
import GenderIcon from '../GenderIcon';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo } from '@/features/cv';

const InfoCard = ({ title, email, gender, fullname }) => {
  const personalInfo = useSelector(state => state.rootReducer.cv.personalInfo)
  const dispatch = useDispatch();

  const handleGenderChange = (e) => {
    dispatch(updatePersonalInfo({ gender: e.target.value }));
  };

  return (
    <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
      <div className='border-t border-b border-green-600 pl-2 text-lg font-semibold'>
        {title}
      </div>
      <div className="mt-5">
        <Form.Item
          name="fullname"
          className='w-full m-0'
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <div className='flex gap-4 w-[230px]'>
            <UserOutlined className='text-xl text-green-600' />
            <Input
              defaultValue={fullname}
              placeholder="Your full name"
              className='rounded-lg p-1 text-xs'
              onChange={(e) => dispatch(updatePersonalInfo({ fullName: e.target.value }))}
            />
          </div>
        </Form.Item>
      </div>
      <div className="mt-1">
        <Form.Item
          name="gender"
          className='w-full m-0'
          rules={[{ required: true, message: 'Please select your gender!' }]}
        >
          <div className='flex gap-4 w-[230px] items-center'>
            <GenderIcon gender={personalInfo.gender} className='text-xl text-green-600' />
            <Radio.Group
              defaultValue={gender}
              onChange={handleGenderChange}
              className='flex gap-4'
            >
              <Radio value={true}>Male</Radio>
              <Radio value={false}>Female</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
      </div>
      <div className="mt-1">
        <Form.Item
          name="email"
          className='w-full m-0'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <div className='flex gap-4 w-[230px]'>
            <MailOutlined className='text-xl text-green-600' />
            <Input
              defaultValue={email}
              placeholder="your.email@example.com"
              className='rounded-lg p-1 text-xs'
              onChange={(e) => dispatch(updatePersonalInfo({ email: e.target.value }))}
            />
          </div>
        </Form.Item>
      </div>
      <div className="mt-1">
        <Form.Item
          name="phone"
          className='w-full m-0'
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <div className='flex gap-4 w-[230px]'>
            <PhoneOutlined className='text-xl text-green-600' />
            <Input
              defaultValue={personalInfo.phone}
              placeholder='0123 456 789'
              className='rounded-lg p-1 text-xs'
              onChange={(e) => dispatch(updatePersonalInfo({ phone: e.target.value }))}
            />
          </div>
        </Form.Item>
      </div>
      <div className="mt-1">
        <Form.Item
          defaultValue={personalInfo.socialLink}
          name="location"
          className='w-full m-0'
          rules={[{ required: true, message: 'Please input your social link!' }]}
          onChange={(e) => dispatch(updatePersonalInfo({ socialLink: e.target.value }))}
        >
          <div className='flex gap-4 w-[230px]'>
            <GlobalOutlined className='text-xl text-green-600' />
            <Input
              defaultValue={personalInfo.socialLink}
              placeholder='facebook.com/Internhub'
              className='rounded-lg p-1 text-xs'
              onChange={(e) => dispatch(updatePersonalInfo({ socialLink: e.target.value }))}
            />
          </div>
        </Form.Item>
      </div>
      <div className="mt-1">
        <Form.Item
          className='w-full m-0'
          name="social_media_link"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <div className='flex gap-4 w-[230px]'>
            <EnvironmentOutlined className='text-xl text-green-600' />
            <Input
              defaultValue={personalInfo.location}
              placeholder='Quận 12, TP.HCM'
              className='rounded-lg p-1 text-xs'
              onChange={(e) => dispatch(updatePersonalInfo({ location: e.target.value }))}
            />
          </div>
        </Form.Item>
      </div>
    </div>
  )
}

export default InfoCard
