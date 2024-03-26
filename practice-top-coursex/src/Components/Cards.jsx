import Card from "./Card";

export default function Cards(Props)
{
    let Data_Arr = [];
    const Extracting_Data = () =>
    {
        if(Props.Title === "All")
        {
            Object.values(Props.Courses).forEach((Element) =>
            {
                Element.forEach((Val) =>
                {
                    Data_Arr.push(Val);
                })
            })
        }
        else
        {
            Data_Arr = Props.Courses[Props.Title];
        }
    }
    Extracting_Data();
    return (
        <div>
            {
                Data_Arr.map((Element) =>
                {
                    return <Card key={Element.title} Element={Element}></Card>
                })
            }
        </div>
    );
}