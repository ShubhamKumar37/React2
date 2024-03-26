import Card from './Card.jsx';
import BigCard from './BigCard.jsx';

export default function Cards(Props) {
    let Count = 3;
    let Num = 4;
    return (
        <div className={`'relative max-w-[730px] flex flex-col gap-[2rem] rounded-lg  ${Props.Mode === false ? 'bg-white' : 'text-white'}`}>
            {Props.News && Props.News.map((NewsContent, index) => {
                Count++;
                if (Count % Num === 0) {
                    return (
                        <BigCard Mode={Props.Mode} key={index} NewsContent={NewsContent}></BigCard>
                    );
                }
                else {
                    return (
                        <Card  Mode={Props.Mode} key={index} NewsContent={NewsContent}></Card>
                    );
                }
            })}
        </div>
    );
}