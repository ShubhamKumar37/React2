

export default function NewFilter(Props) {
    let SetCatogory = Props.SetCatagory;

    function AddIdHandler(Title) {
        SetCatogory(Title);
    }

    return (
        <div className="relative flex justify-center bg-blue-950 text-lg text-white gap-6">
            {
                Props.filterData.map((Value) => {
                    return (
                        <button className="relative border-2 border-white rounded-lg p-1 px-2 m-1" onClick={() => {
                            AddIdHandler(Value.title)
                        }
                        } key={Value.id}>{Value.title}</button>
                    );
                })
            }
        </div>
    );
}