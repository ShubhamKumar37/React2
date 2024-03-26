
export default function Card(Props) {

    function HandleLevel3()
    {
        let Arr = [1, 5, 2, 5, 6, 7, 3, 2];
        Props.onCopy2(Arr);
    }

    return (
        <div className="relative flex flex-col p-2 bg-black rounded-lg text-center">
            <div>{Props.Dates[0]}</div>
            <div>{Props.Dates[1]}</div>
            <div>{Props.Dates[2]}</div>
            <button onClick={HandleLevel3} className="relative bg-blue-500 p-4 text-white">Click me </button>
        </div>
    );
}