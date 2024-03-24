import Cards from "./Cards";

export default function Testimonial(Props)
{
    const reviews = Props.Data;
    
    return (
        <div className="relative hover:shadow-lg">
            <Cards Data={reviews}></Cards>
        </div>
    );
}