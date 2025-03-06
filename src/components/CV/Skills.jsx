import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addPrimarySkill, 
  addSecondarySkill, 
  removePrimarySkill, 
  removeSecondarySkill,
  updatePrimarySkill,
  updateSecondarySkill 
} from '@/features/cv';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.rootReducer.cv.skills);
    const [hardSkillFields, setHardSkillFields] = useState([]);
    const [softSkillFields, setSoftSkillFields] = useState([]);

    // Initialize fields from Redux state
    useEffect(() => {
        setHardSkillFields(
            skills.hardSkills.map((skill, index) => ({
                id: index,
                value: skill
            }))
        );
        setSoftSkillFields(
            skills.softSkills.map((skill, index) => ({
                id: index,
                value: skill
            }))
        );
    }, [skills.hardSkills, skills.softSkills]);

    const handleHardSkillChange = (id, value) => {
        const index = hardSkillFields.findIndex(field => field.id === id);
        if (index !== -1) {
            dispatch(updatePrimarySkill({ index, value }));
        }
    };

    const handleSoftSkillChange = (id, value) => {
        const index = softSkillFields.findIndex(field => field.id === id);
        if (index !== -1) {
            dispatch(updateSecondarySkill({ index, value }));
        }
    };

    const addHardSkillField = () => {
        const newId = hardSkillFields.length;
        setHardSkillFields([...hardSkillFields, { id: newId, value: '' }]);
        dispatch(addPrimarySkill(''));
    };

    const addSoftSkillField = () => {
        const newId = softSkillFields.length;
        setSoftSkillFields([...softSkillFields, { id: newId, value: '' }]);
        dispatch(addSecondarySkill(''));
    };

    const removeHardSkillField = (id) => {
        const index = hardSkillFields.findIndex(field => field.id === id);
        setHardSkillFields(hardSkillFields.filter(field => field.id !== id));
        dispatch(removePrimarySkill(index));
    };

    const removeSoftSkillField = (id) => {
        const index = softSkillFields.findIndex(field => field.id === id);
        setSoftSkillFields(softSkillFields.filter(field => field.id !== id));
        dispatch(removeSecondarySkill(index));
    };

    return (
        <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
            <div className='border-t border-b border-green-600 pl-2 text-lg font-semibold'>
                Skills
            </div>
            
            {/* Hard Skills Section */}
            <div className="mt-5">
                <div className="font-medium mb-2">Hard Skills</div>
                {hardSkillFields.map((field) => (
                    <Form.Item
                        key={field.id}
                        name={`hardSkill_${field.id}`}
                        className='w-full m-0 mb-2'
                    >
                        <div className='flex gap-2 w-[230px]'>
                            <Input 
                                placeholder='Add hard skill'
                                className='rounded-lg p-1 text-xs'
                                value={skills.hardSkills[field.id]}
                                onChange={(e) => handleHardSkillChange(field.id, e.target.value)}
                            />
                            <DeleteOutlined 
                                className="text-red-500 cursor-pointer mt-2"
                                onClick={() => removeHardSkillField(field.id)}
                            />
                        </div>
                    </Form.Item>
                ))}
                
                <Button 
                    type="dashed"
                    onClick={addHardSkillField}
                    icon={<PlusOutlined />}
                    className="w-[230px] mt-2"
                >
                    Add Hard Skill Field
                </Button>
            </div>

            {/* Soft Skills Section */}
            <div className="mt-5">
                <div className="font-medium mb-2">Soft Skills</div>
                {softSkillFields.map((field) => (
                    <Form.Item
                        key={field.id}
                        name={`softSkill_${field.id}`}
                        className='w-full m-0 mb-2'
                    >
                        <div className='flex gap-2 w-[230px]'>
                            <Input 
                                placeholder='Add soft skill'
                                className='rounded-lg p-1 text-xs'
                                value={skills.softSkills[field.id]}
                                onChange={(e) => handleSoftSkillChange(field.id, e.target.value)}
                            />
                            <DeleteOutlined 
                                className="text-red-500 cursor-pointer mt-2"
                                onClick={() => removeSoftSkillField(field.id)}
                            />
                        </div>
                    </Form.Item>
                ))}
                
                <Button 
                    type="dashed"
                    onClick={addSoftSkillField}
                    icon={<PlusOutlined />}
                    className="w-[230px] mt-2"
                >
                    Add Soft Skill Field
                </Button>
            </div>
        </div>
    );
};

export default Skills;
