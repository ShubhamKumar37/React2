import Card from './Card';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Cards(Props) {

    const [Index, SetIndex] = useState(0);

    function LeftSwipeHandler()
    {
        if(Index - 1 === -1)
        {
            SetIndex(Props.Data.length - 1);
        }
        else
        {
            SetIndex(Index - 1);
        }
    }
    
    function RightSwipeHandler()
    {
        if(Index + 1 === Props.Data.length)
        {
            SetIndex(0);
        }   
        else
        {
            SetIndex(Index + 1);
        }
    }

    function SurpriseHandler()
    {
        function getRandomArbitrary(min, max) {
            let Value = Math.floor(Math.random() * (max - min) + min);
            if(Value === Index)
            {
                Value = getRandomArbitrary(min, max);
            }
            
            return Value;
        }

        SetIndex(getRandomArbitrary(0, Props.Data.length));
    }


    return (
        <div className='flex flex-col relative bg-white p-8 rounded-lg'>
            <Card Data={Props.Data[Index]}></Card>
            <div className='relative space-y-5 flex flex-col'>
                <div className=' mx-auto gap-[5rem] space-x-20 text-purple-600 text-xl'>
                    <button onClick={LeftSwipeHandler}>
                        <IoIosArrowBack></IoIosArrowBack>
                    </button>
                    <button onClick={RightSwipeHandler}>
                        <IoIosArrowForward></IoIosArrowForward>
                    </button>
                </div>

                <div>
                    <button onClick={SurpriseHandler} className='bg-purple-600 text-white p-2 px-4 rounded-md hover:font-bold transition-all duration-200'>Surprise me :-O</button>
                </div>
            </div>
        </div>
    );
}