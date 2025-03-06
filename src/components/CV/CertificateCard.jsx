import { Form, Input, Button } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addCertificate, updateCertificate, removeCertificate } from '@/features/cv';
import { useEffect, useState } from 'react';

const Certificate = () => {
    const dispatch = useDispatch();
    const certificates = useSelector(state => state.rootReducer.cv.certificates.items);
    const [certificateFields, setCertificateFields] = useState([]);

    useEffect(() => {
        // Initialize from Redux state
        if (certificates.length > 0) {
            setCertificateFields(certificates.map((_, index) => ({ id: index })));
        }
    }, [certificates]);

    const handleCertificateChange = (id, field, value) => {
        dispatch(updateCertificate({
            index: id,
            data: { [field]: value }
        }));
    };

    const addCertificateField = () => {
        const newId = certificateFields.length;
        setCertificateFields([...certificateFields, { id: newId }]);
        dispatch(addCertificate({
            date: "",
            title: "",
        }));
    };

    const removeCertificateField = (id) => {
        setCertificateFields(certificateFields.filter(field => field.id !== id));
        dispatch(removeCertificate(id));
    };

    return (
        <div className="p-2 hover:border-2 hover:boder-solid rounded-md">
            <div className='border-t border-b border-green-600 pl-2 text-lg font-semibold'>
                Certificate
            </div>

            {certificateFields.map((field) => (
                <div key={field.id} className="mt-5 relative">
                    {certificateFields.length > 0 && (
                        <DeleteOutlined 
                            className="absolute -right-4 top-2 text-red-500 cursor-pointer"
                            onClick={() => removeCertificateField(field.id)}
                        />
                    )}
                    
                    <Form.Item
                        name={`certificate_date_${field.id}`}
                        className='w-full m-0'
                        rules={[{ required: true, message: 'Please input certificate date!' }]}
                    >
                        <div className=''>
                            <Input 
                                placeholder='Thời gian' 
                                className='rounded-lg p-1 w-[359px] text-xs'
                                value={certificates[field.id]?.date}
                                onChange={(e) => handleCertificateChange(field.id, 'date', e.target.value)}
                            />
                        </div>
                    </Form.Item>

                    <div className="mt-1">
                        <Form.Item
                            name={`certificate_title_${field.id}`}
                            className='w-full m-0'
                            rules={[{ required: true, message: 'Please input certificate name!' }]}
                        >
                            <div className=''>
                                <Input 
                                    placeholder='Tên chứng chỉ' 
                                    className='rounded-lg p-1 w-[359px] text-xs'
                                    value={certificates[field.id]?.title}
                                    onChange={(e) => handleCertificateChange(field.id, 'title', e.target.value)}
                                />
                            </div>
                        </Form.Item>
                    </div>
                </div>
            ))}

            <Button
                type="dashed"
                onClick={addCertificateField}
                icon={<PlusOutlined />}
                className="w-full mt-3"
            >
                Add Certificate
            </Button>
        </div>
    );
};

export default Certificate;
