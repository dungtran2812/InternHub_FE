
import { AvatarDemo } from "./Avatar";
import CategoryButton from "./CategoryButton";
import { SmallAvatar } from "./SmallAvatar";


export function BlogAndReviewCard({ title, category,  description
    // , 
    // image,authorAvatar, authorName
    ,
     timeToRead }) {
    return (
        <div className="w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center">
                <AvatarDemo />
            </div>
            <div className="flex">
                {Array.isArray(category) && category.map((item, index) => (
                    <div key={index} className="mr-2">
                        <CategoryButton category={item} />
                    </div>
                ))}
            </div>
            <div className="mt-2 text-xl font-bold">
                <p>{title}</p>
            </div>
            <div className="text-sm mt-2">
                {description}
            </div>
            <div className="mt-10 grid grid-cols-6">
                <div className="col-span-1">
                  <SmallAvatar url={""}/>
                </div>
                <div className="col-span-3 flex items-center">
                    {title}
                </div>
                <div className="col-span-2 flex items-center text-sm">
                    {timeToRead} phút để đọc
                </div>
            </div>
        </div>
    )
}
