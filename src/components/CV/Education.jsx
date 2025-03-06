import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { updateEducation } from '@/features/cv';

const EducationCard = () => {
    const dispatch = useDispatch();
    const education = useSelector(state => state.rootReducer.cv.education);

    return (
        <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
            <div className='border-t border-b border-green-600 py pl-2 text-lg font-semibold'>
                Education
            </div>
            <div className="mt-5">
                <Form.Item
                    name="school_name"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input school name!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <Input 
                            placeholder='Tên trường học' 
                            className='rounded-lg p-1 text-xs'
                            defaultValue={education.schoolName}
                            onChange={(e) => dispatch(updateEducation({ schoolName: e.target.value }))}
                        />
                    </div>
                </Form.Item>
            </div>
            <div className="mt-1">
                <Form.Item
                    name="specialized"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input your major!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <Input 
                            placeholder='Ngành học / Môn học' 
                            className='rounded-lg p-1 text-xs'
                            defaultValue={education.major}
                            onChange={(e) => dispatch(updateEducation({ major: e.target.value }))}
                        />
                    </div>
                </Form.Item>
            </div>
            <div className="mt-1">
                <Form.Item
                    name="time"
                    className='w-full m-0'
                    rules={[{ required: true, message: 'Please input time period!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <Input 
                            placeholder='Bắt đầu' 
                            className='rounded-lg p-1 text-xs w-[100px]'
                            defaultValue={education.startDate}
                            onChange={(e) => dispatch(updateEducation({ startDate: e.target.value }))}
                        />
                        <div>-</div>
                        <Input 
                            placeholder='Kết thúc' 
                            className='rounded-lg p-1 text-xs w-[100px]'
                            defaultValue={education.endDate}
                            onChange={(e) => dispatch(updateEducation({ endDate: e.target.value }))}
                        />
                    </div>
                </Form.Item>
            </div>
            <div className="mt-1">
                <Form.Item
                    className='w-full m-0'
                    name="description"
                    rules={[{ required: true, message: 'Please input description!' }]}
                >
                    <div className='flex gap-4 w-[230px]'>
                        <TextArea 
                            placeholder='Mô tả quá trình học tập hoặc thành tích của bạn'
                            defaultValue={education.description}
                            onChange={(e) => dispatch(updateEducation({ description: e.target.value }))}
                        />
                    </div>
                </Form.Item>
            </div>
        </div>
    )
}

export default EducationCard;
