import { Avatar } from "antd"

const InternFeedbackCard = ({ description, title, specialized, avatar }) => {
    return (
        <div className='border border-solid p-5 rounded-xl w-80 '>
            <div className='font-bold text-xl flex'>
                <Avatar size={48} src={avatar} className="mr-5"/>
                <div className="flex items-center">
                    {title}
                </div>
            </div>
            <div className="mt-2 text-blue-800">
                {specialized}
            </div>
            <div className="mt-2">
                {description}
            </div>
        </div>
    )
}

export default InternFeedbackCard
 