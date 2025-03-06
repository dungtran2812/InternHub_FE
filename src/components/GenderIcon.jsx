import { QuestionCircleOutlined } from '@ant-design/icons';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';

const GenderIcon = ({ gender }) => {
    return (
        <div className="flex items-center">
            {gender ? (
                <AiOutlineMan className="text-blue-500 text-2xl" />
            ) : !gender ? (
                <AiOutlineWoman className="text-pink-500 text-2xl" />
            ) : (
              <QuestionCircleOutlined className="text-xl text-green-600" />
            )}
        </div>
    );
};

export default GenderIcon;
