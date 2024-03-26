

export default function SliderCard(Props)
{
    return (
        <div className=" rounded-lg w-[13rem] min-w-[13rem]  ">
            <div>
                <img src={Props.News.urlToImage} alt="Nope" className="w-[10rem] h-[7rem] rounded-lg  object-cover aspect-square" loading="lazy"></img>
            </div>
            <div>
                <h2 className="font-bold w-[80%]">{Props.News.title && Props.News.title.substring(0, 40)}..</h2>
            </div>
            {/* <div>
                <p className="text-sm w-[17rem] mt-1">{Props.News.description && Props.News.description.substring(0,70)}...<span><a href={Props.News.url} target="_blank" className="underline-none text-blue-500 cursor-pointer">ReadMore</a></span></p>
            </div> */}
        </div>
    );
}

