

export default function ({Mode}) {

    const Arr = ['NEWS', 'NORTHEAST', 'NORTHEAST', 'BUISNESS TODAY', 'BT BAZZAR', 'AAJ TAK', 'LALLANTOP', 'BANGLA', 'GNTTV', 'BNTTV', `READER'S DIGEST`, 'SPORTS'];

    return (
        <div className={`border-b border-gray-400 ${Mode === false ? 'text-black bg-white' : 'text-white bg-black'}`}>

            <div className="w-11/12 mx-auto">
                <ul className="flex flex-row justify-evenly">
                    {
                        Arr.map((Element) =>
                        {
                            return (<li className="hover:bold  hover:font-bold cursor-pointer transition-all duration-100">{Element}</li>)
                        })
                    }
                </ul>
            </div>
        </div>
    );
}