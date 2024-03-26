import Card from "./Card";
import { useState } from "react";


export default function DateCard(Props) {
    const [Title, SetTitle] = useState(Props.AllValue[0].Name);
    const Add_Cart_Handler = (Event) =>
    {
        SetTitle('Popcorn');
        console.log("Yup i added your item to cart");
    }

    function HandleLevel2(Data)
    {
        Props.onCopy(Data);
    }
    return (
        <>
            <div className="relative flex flex-col gap-9 bg-yellow-300 min-w-[20rem] p-3 text-white rounded-lg">
                <div className="flex flex-row justify-between p-3 bg-blue-600 rounded-lg">
                    <Card Dates={[Props.AllValue[0].Month, Props.AllValue[0].Date, Props.AllValue[0].Year]} onCopy2={HandleLevel2}></Card>

                    <p className="font-bold ">{Title}</p>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={Add_Cart_Handler}>Add to Cart</button>
                </div>
                <div className="flex flex-row justify-between p-3 bg-blue-600 rounded-lg">
                    <Card Dates={[Props.AllValue[1].Month, Props.AllValue[1].Date, Props.AllValue[1].Year]}></Card>
                    <p className="font-bold">{Props.AllValue[1].Name}</p>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={Add_Cart_Handler}>Add to Cart</button>
                </div>
                <div className="flex flex-row justify-between p-3 bg-blue-600 rounded-lg">
                    <Card Dates={[Props.AllValue[2].Month, Props.AllValue[0].Date, Props.AllValue[0].Year]}></Card>
                    <p className="font-bold">{Props.AllValue[2].Name}</p>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={Add_Cart_Handler}>Add to Cart</button>
                </div>
                <div className="flex flex-row justify-between p-3 bg-blue-600 rounded-lg">
                    <Card Dates={[Props.AllValue[3].Month, Props.AllValue[0].Date, Props.AllValue[0].Year]}></Card>
                    <p className="font-bold">{Props.AllValue[3].Name}</p>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={Add_Cart_Handler}>Add to Cart</button>
                </div>

            </div>
        </>
    );
}