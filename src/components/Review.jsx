import moment from "moment";
import { Rate } from 'antd';

function formatDate(timestamp) {
    return moment.unix(timestamp).format("DD/MM/YYYY");
}

const Review = ({ reviews }) => {
    return (
        <div className="flex justify-center items-center p-10 bg-gray-50">
            <div className="px-10 flex flex-col gap-2 p-5 bg-gray-200 text-black w-full rounded-md shadow-md">
                <h1 className="py-5 text-lg font-bold">Reviews</h1>
                <div className="flex bg-gray-300 bg-opacity-50 border border-gray-400 rounded-md">
                    <ion-icon className="py-4 p-3 text-gray-600" name="search-outline"></ion-icon>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search Review"
                        className="p-2 bg-transparent focus:outline-none w-full"
                    />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 w-full py-2">
                    {["Experience", "Quality", "Design", "Size", "Features", "Value", "Replacement"].map(
                        (tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 hover:bg-blue-300 bg-gray-300 text-gray-700 rounded-md cursor-pointer transition duration-300"
                            >
                                {tag}
                            </span>
                        )
                    )}
                </div>

                {/* Item Container */}
                <div className="flex flex-col gap-3 mt-8">
                    {/* Review Item */}
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md shadow-md"
                        >
                            {/* Profile and Rating */}
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="w-7 h-7 rounded-full overflow-hidden">
                                        <img
                                            src={review.student.avtUrl}
                                            alt={review.student.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="font-medium text-gray-800">
                                        {review.student.name}
                                    </span>
                                </div>
                                <div className="flex">
                                    <Rate
                                        allowHalf
                                        defaultValue={review.rate}
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="text-gray-700">
                                {review.reviewContent}
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">
                                    {formatDate(review.date)}
                                </span>
                                <button className="p-1 px-2 bg-gray-200 hover:bg-gray-300 border border-gray-400 rounded-md flex items-center gap-1 text-gray-700 transition duration-300">
                                    <ion-icon name="share-outline"></ion-icon> Share
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
