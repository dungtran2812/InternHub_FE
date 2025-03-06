import { Form, Input, Button } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addHonorAward, updateHonorAward, removeHonorAward } from '@/features/cv';
import { useEffect, useState } from 'react';

const HonorsAndAwards = () => {
    const dispatch = useDispatch();
    const awards = useSelector(state => state.rootReducer.cv.honorsAndAwards.items);
    const [awardFields, setAwardFields] = useState([{ id: 0 }]);

    useEffect(() => {
        // Initialize from Redux state
        if (awards.length > 0) {
            setAwardFields(awards.map((_, index) => ({ id: index })));
        }
    }, [awards]);

    const handleAwardChange = (id, field, value) => {
        dispatch(updateHonorAward({
            index: id,
            data: { [field]: value }
        }));
    };

    const addAwardField = () => {
        const newId = awardFields.length;
        setAwardFields([...awardFields, { id: newId }]);
        dispatch(addHonorAward({
            date: "",
            title: "",
        }));
    };

    const removeAwardField = (id) => {
        setAwardFields(awardFields.filter(field => field.id !== id));
        dispatch(removeHonorAward(id));
    };

    return (
        <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
            <div className='border-t border-b border-green-600 pl-2 text-lg font-semibold'>
                Honors And Awards
            </div>

            {awardFields.map((field) => (
                <div key={field.id} className="mt-5 relative">
                    {awardFields.length > 0 && (
                        <DeleteOutlined 
                            className="absolute -right-4 top-2 text-red-500 cursor-pointer"
                            onClick={() => removeAwardField(field.id)}
                        />
                    )}
                    
                    <Form.Item
                        name={`award_date_${field.id}`}
                        className='w-full m-0'
                        rules={[{ required: true, message: 'Please input award date!' }]}
                    >
                        <div className=''>
                            <Input 
                                placeholder='Thời gian' 
                                className='rounded-lg w-[359px] p-1 text-xs'
                                value={awards[field.id]?.date}
                                onChange={(e) => handleAwardChange(field.id, 'date', e.target.value)}
                            />
                        </div>
                    </Form.Item>

                    <div className="mt-1">
                        <Form.Item
                            name={`award_title_${field.id}`}
                            className='w-full m-0'
                            rules={[{ required: true, message: 'Please input award name!' }]}
                        >
                            <div className=''>
                                <Input 
                                    placeholder='Tên giải thưởng' 
                                    className='w-[359px] rounded-lg p-1 text-xs'
                                    value={awards[field.id]?.title}
                                    onChange={(e) => handleAwardChange(field.id, 'title', e.target.value)}
                                />
                            </div>
                        </Form.Item>
                    </div>
                </div>
            ))}

            <Button 
                type="dashed"
                onClick={addAwardField}
                icon={<PlusOutlined />}
                className="w-full mt-3"
            >
                Add Honor/Award
            </Button>
        </div>
    );
};

export default HonorsAndAwards;
