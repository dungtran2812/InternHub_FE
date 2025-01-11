import { SmallAvatar } from "./SmallAvatar";

export function BlogCard({ title, description,
    image, authorAvatar, authorName
    ,
    timeToRead }) {
    return (
        <div className="w-96  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center">
                <img className="w-full" src={image} alt={"a"} />
            </div>
            <div className="mt-2 text-xl font-bold px-2">
                <p>{title}</p>
            </div>
            <div className="text-sm mt-2 px-2">
                {description}
            </div>
            <div className="mt-10 grid grid-cols-6">
                <div className="col-span-1">
                    <SmallAvatar url={authorAvatar} />
                </div>
                <div className="col-span-3 flex items-center">
                    {authorName}
                </div>
                <div className="col-span-2 flex items-center text-sm">
                    {timeToRead} minutes ago
                </div>
            </div>
        </div>
    )
}
