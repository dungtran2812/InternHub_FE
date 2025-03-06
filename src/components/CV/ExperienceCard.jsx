import { Form, Input, Button } from "antd";
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addExperience, updateExperience, removeExperience } from '@/features/cv';
import { useEffect, useState } from "react";

const ExperienceCard = () => {
    const dispatch = useDispatch();
    const experiences = useSelector(state => state.rootReducer.cv.experience.items);
    const [experienceFields, setExperienceFields] = useState([{ id: 0 }]);

    useEffect(() => {
        // Initialize from Redux state
        if (experiences.length > 0) {
            setExperienceFields(experiences.map((_, index) => ({ id: index })));
        }
    }, [experiences]);

    const handleExperienceChange = (id, field, value) => {
        dispatch(updateExperience({
            index: id,
            data: { [field]: value }
        }));
    };

    const addExperienceField = () => {
        const newId = experienceFields.length;
        setExperienceFields([...experienceFields, { id: newId }]);
        dispatch(addExperience({
            startDate: "",
            endDate: "",
            companyName: "",
            position: "",
            description: "",
        }));
    };

    const removeExperienceField = (id) => {
        setExperienceFields(experienceFields.filter(field => field.id !== id));
        dispatch(removeExperience(id));
    };

    return (
        <div className="p-2 hover:border-2 hover:border-solid rounded-md mt-5">
            <div className="border-t border-b border-green-600 pl-2 text-lg font-semibold">
                Experience
            </div>

            {experienceFields.map((field) => (
                <div key={field.id} className="mt-5 p-2 border-2 border-solid rounded-md relative">
                    {experienceFields.length > 0 && (
                        <DeleteOutlined 
                            className="absolute -top-4 -left-2 text-red-500 cursor-pointer"
                            onClick={() => removeExperienceField(field.id)}
                        />
                    )}
                    
                    <div className="grid grid-cols-12 gap-2 items-center">
                        <Form.Item className="col-span-3 m-0" name={`time_start_${field.id}`}>
                            <Input 
                                placeholder="Bắt đầu" 
                                className="rounded-lg p-1 text-xs w-[168px]"
                                defaultValue={experiences[field.id]?.startDate}
                                onChange={(e) => handleExperienceChange(field.id, 'startDate', e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item className="col-span-3 m-0" name={`time_end_${field.id}`}>
                            <Input 
                                placeholder="Kết thúc" 
                                className="rounded-lg p-1 text-xs w-[168px]"
                                defaultValue={experiences[field.id]?.endDate}
                                onChange={(e) => handleExperienceChange(field.id, 'endDate', e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            className="col-span-6 m-0"
                            name={`job_position_${field.id}`}
                            rules={[{ required: true, message: "Vui lòng nhập vị trí công việc!" }]}
                        >
                            <Input 
                                placeholder="Vị trí công việc" 
                                className="rounded-lg p-1 text-xs w-[357px]"
                                defaultValue={experiences[field.id]?.position}
                                onChange={(e) => handleExperienceChange(field.id, 'position', e.target.value)}
                            />
                        </Form.Item>
                    </div>

                    <div className="grid grid-cols-12 gap-2 items-center mt-2">
                        <Form.Item className="col-span-4 m-0" name={`company_${field.id}`}>
                            <Input 
                                placeholder="Tên công ty" 
                                className="rounded-lg p-1 text-xs w-[235px]"
                                defaultValue={experiences[field.id]?.companyName}
                                onChange={(e) => handleExperienceChange(field.id, 'companyName', e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            className="col-span-8 m-0"
                            name={`description_${field.id}`}
                            rules={[{ required: true, message: "Vui lòng nhập mô tả công việc!" }]}
                        >
                            <Input 
                                placeholder="Mô tả công việc của bạn" 
                                className="rounded-lg p-1 text-xs w-[478px]"
                                defaultValue={experiences[field.id]?.description}
                                onChange={(e) => handleExperienceChange(field.id, 'description', e.target.value)}
                            />
                        </Form.Item>
                    </div>
                </div>
            ))}

            <Button 
                type="dashed"
                onClick={addExperienceField}
                icon={<PlusOutlined />}
                className="w-full mt-3"
            >
                Add Experience
            </Button>
        </div>
    );
};

export default ExperienceCard;
