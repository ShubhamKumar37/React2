import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


export default function Card(Props)
{

    return (
        <div className='relative flex flex-col justify-evenly h-[20rem]'>
            <div className='relative -top-[7rem] left-4'>
                <img src={Props.Data.image} alt='#' className='absolute aspect-square w-[7rem] rounded-full z-20 object-cover'></img>
                <div className='absolute rounded-full bg-purple-600 w-[7rem] h-[7rem] z-10 -top-2 left-2'></div>
            </div>

            <div>
                <h1 className='font-bold text-2xl'>{Props.Data.name}</h1>
            </div>

            <div>
                <h3 className=' opacity-70 italic'>{Props.Data.job}</h3>
            </div>

            <div className='flex flex-col items-center gap-3 text-purple-600'>
                <FaQuoteLeft></FaQuoteLeft>
                <p className='text-black opacity-85'>{Props.Data.text}</p>
                <FaQuoteRight></FaQuoteRight>
            </div>

    
        </div>
    );
}