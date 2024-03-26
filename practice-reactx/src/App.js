import { useState } from 'react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',

  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 2 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className=''>

      {/* <div className="container w-[40rem] flex items-center justify-center">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={handlePrevClick}>
          Prev
        </button>
        <div className="w-[20rem] h-[200px] overflow-hidden">
          <div className="flex  transition-all duration-300 gap-[1rem]" style={{ transform: `translateX(-${currentIndex * 20}rem)` }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} className="w-[20rem] h-[200px] object-cover" />
            ))}
          </div>
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={handleNextClick}>
          Next
        </button>
      </div> */}
      <div className="relative flex flex-row w-full justify-center">
        <button className="left-0" onClick={handlePrevClick}>
          Prev
        </button>
        <div className='overflow-hidden' style={{width: `13rem`}}>
          <div className="  transition-all duration-300" style={{ transform: `translateX(-${currentIndex * 10}rem)` }}>
            <div className=" flex gap-3 z-[-10]" >
              {images.map((image, index) => (
                <img key={index} src={image}  style={{width:`100px`, height:`100px`}} />
              ))}
            </div>
          </div>

        </div>
        <button className="" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

// style={{ transform: `translateX(-${currentIndex * 20}rem)` }}
