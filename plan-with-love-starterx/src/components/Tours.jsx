import Card from './Card';

export default function Tours({ tours, RemoveCard}) {

    return (
        <div className='relative flex max-w-[1080px] flex-wrap gap-4 justify-center'>
            {
                tours.map((tour) => (
                    <Card {...tour} RemoveCard={RemoveCard}/>

                ))
            }
        </div >
    );
}