

export default function Card(Props) {
    return (
        <div className={`${Props.Mode === false ? 'bg-white  border border-gray-400' : 'bg-[#2C2C2C]'} relative p-3 py-5 rounded-lg m-2 flex justify-evenly`}>
            <div className="w-[70%] flex flex-col justify-between">
                <span className="font-bold text-red-600 text-2xl">Normal news</span>
                {/* Published on */}
                <p className="text-sm text-gray-500">{Props.NewsContent.publishedAt.substring(0, 10)}</p>


                <div className="relative flex flex-col gap-4">

                    {/* Title of Card*/}
                    <a href={Props.NewsContent.url} target="_blank"></a><h2 className={`${Props.Mode === false ? "text-black" : "text-white"} font-bold text-2xl cursor-pointer`}>{Props.NewsContent.title}</h2>

                    {/* Description of the news and publish by whom */}
                    <div className="">
                        <p className="relative opacity-80 italic">{Props.NewsContent.author}-</p>
                        <p className="text-sm">{Props.NewsContent.description && Props.NewsContent.description.substring(0, 160)}...<span><a href={Props.NewsContent.url} target="_blank" className="underline-none text-blue-500 cursor-pointer">ReadMore</a></span></p>
                    </div>
                </div>

                <a href={Props.NewsContent.url} target="_blank" className=" mt-4 p-2 border-2 border-red-600 text-red-700  rounded-lg transition-all duration-200  text-center hover:bg-red-600 hover:text-white hover:text-xl">To Know more about it</a>
            </div>
            <div className="flex items-center">
                {/* Image of Card */}
                <img src={Props.NewsContent.urlToImage} className="aspect-square w-[15rem] object-cover rounded-lg" loading="lazy"></img>
            </div>
        </div>
    );
}