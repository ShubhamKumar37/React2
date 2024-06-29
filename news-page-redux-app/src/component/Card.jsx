import { useSelector } from "react-redux";

export default function Card(Props)
{
    const {publishedAt, title, author, description, urlToImage} = Props.value;
    const mode = useSelector((State) => State.mode.value);

    return (
        <div className="flex flex-col m-3">
            <div className={`w-[70%] mx-auto p-3 border border-red-600 rounded-lg flex   ${mode === true ? "flex-row" : "flex-col"}`}>
                <div className="mx-auto">
                    <p>{publishedAt}</p>
                    <h1 className="font-bold">{title}</h1>
                    <span>{author}</span>
                    <p className="text-sm">{description}</p>
                </div>
                
                <div>
                    <img src={urlToImage} alt={title} width={400} height={400} className="mx-auto rounded-md"/>    
                </div>
            </div>
        </div>
    );
}