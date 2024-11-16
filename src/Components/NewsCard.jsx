import { CiShare2 } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";



export default function NewsCard({ items }) {


    return (
        <div className="p-3">
            <div className="w-full my-shadow p-6 mb-6  overflow-hidden">
                <div className="p-4">
                    <div className="flex shadow-lg items-center justify-between space-x-2 text-sm">
                        <div className="flex flex-row items-center gap-2">
                            <img src={items.author.img} className="w-6 h-6 rounded-full" alt="" />
                            <div className="flex flex-col ">
                                <span className="font-semibold text-gray-700">{items.author.name}</span>
                                <span className="text-gray-500">{items.author.published_date}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 text-md md:text-2xl" >
                            <CiShare2 />
                            <AiFillHeart />

                        </div>
                    </div>
                    <h2 className="mt-2 text-lg font-bold text-gray-800">
                        {items.title}
                    </h2>
                    <img
                        className="w-full object-fill mt-3 h-64"
                        src={items.image_url}
                        alt="News"
                    />
                    <p className="mt-3 text-justify text-sm text-gray-600">
                        {
                            items.details.slice(0, 200)
                        } ...{" "}
                        <Link to={`/news-info/${items._id}`} className="text-blue-500 cursor-pointer">Read More</Link>
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                        <div className="flex items-center text-yellow-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.3 3.995a1 1 0 00.95.69h4.2c.969 0 1.371 1.24.588 1.81l-3.4 2.474a1 1 0 00-.364 1.118l1.3 3.995c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.4 2.474c-.783.57-1.838-.197-1.538-1.118l1.3-3.995a1 1 0 00-.364-1.118L2.598 9.422c-.783-.57-.381-1.81.588-1.81h4.2a1 1 0 00.95-.69l1.3-3.995z" />
                            </svg>
                            <span className="ml-1 font-semibold text-gray-700">4.9</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 3a1 1 0 100-2 1 1 0 000 2zm-4-3a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                            </svg>
                            <span>499</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

