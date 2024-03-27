import Amazon_Logo from "../Images/amazon.png";
import Flipkart_Logo from "../Images/flipkart.png";
import Shoe_Image from "../Images/shoe_image.png";

export default function HeroSection() {
    return (
        <div className="relative w-full mt-[3rem]">
            <div className="w-[80%] flex mx-auto gap-10">
                <div className="w-[50%] flex flex-col gap-3">
                    <p className="text-[90px] font-bold leading-[5rem]">
                        YOUR FEET DESERVE THE BEST
                    </p>
                    <p className="text-lg">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                    <div className="flex flex-row gap-4">
                        <button className="font-bold py-1 px-4 bg-red-600 text-white border border-black">Shop Now</button>
                        <button className="font-bold py-1 px-4 border border-black">Category</button>
                    </div>

                    <div className="text-sm text-gray-600">
                        <p>Also available on </p>
                        <div className="flex gap-4 mt-2">
                            <img src={Amazon_Logo} className="cursor-pointer"></img>
                            <img src={Flipkart_Logo} className="cursor-pointer"></img>
                        </div>
                    </div>
                </div>

                <div className="w-[50%]">
                    <img src={Shoe_Image} ></img>
                </div>

            </div>
        </div>
    );
}