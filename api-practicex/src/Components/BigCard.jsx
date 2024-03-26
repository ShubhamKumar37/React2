export default function Card(Props) {
    return (
        <div className={`relative p-2 py-1 rounded-lg m-2 flex flex-col justify-evenly h-[626px] ${Props.Mode === false ? 'bg-white border border-gray-400' : 'bg-[#2C2C2C]'}`}>
            <div className="w-full flex flex-col justify-between">
                <span className="font-bold text-red-600 text-xl">Normal news</span>
                {/* Published on */}
                <p className="text-sm text-gray-500">{Props.NewsContent.publishedAt.substring(0, 10)}</p>


                <div className="relative flex flex-col gap-4">

                    {/* Title of Card*/}
                    <a className={`font-bold text-xl text-black no-underline cursor-pointer ${Props.Mode === false ? "text-black" : "text-white"}`} href={Props.NewsContent.url} target="_blank">{Props.NewsContent.title}</a>

                    {/* Description of the news and publish by whom */}
                    <div className="">
                        <p className="relative opacity-80 italic">{Props.NewsContent.author}-</p>
                        <p className="text-sm">{Props.NewsContent.description && Props.NewsContent.description.substring(0, 160)}...<span><a href={Props.NewsContent.url} target="_blank" className="underline-none text-blue-500 cursor-pointer">ReadMore</a></span></p>
                    </div>
                </div>

            </div>
            <div className="relative mx-auto overflow-hidden rounded-lg object-center" style={{ width: '690px', height: '388px' }}>
                {/* Image of Card */}
                <a href={Props.NewsContent.url} target="_blank" className="mt-4 p-2"><img src={Props.NewsContent.urlToImage} className="rounded-lg object-center " loading="lazy" style={{ width: '100%', height: '100%' }}></img></a>
                
            </div>
        </div>
    );
}
