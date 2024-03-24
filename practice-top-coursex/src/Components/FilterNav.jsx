

export default function FilterNav(Props) {

    return (
        <div>
            {
                Props.filterData.map((Type) => {

                    return (<button onClick={() =>
                    {
                        Props.SetTitle(Type.title);
                    }} key={Type.id}>{Type.title}</button>)

                })
            }
        </div>
    );
}