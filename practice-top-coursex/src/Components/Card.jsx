

export default function Card(Props)
{
    return (
        <div>
            <img src={Props.Element.image.url} alt="" className="w-[5rem] h-[5rem]"></img>
            
            <h2>{Props.Element.title}</h2>
            
            <p>{Props.Element.description}</p>
        </div>
    );
}