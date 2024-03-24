import Card from './Card';

export default function Cards(Props) {
    let Catagory = Props.Catagory;
    const Get_Courses = () => {
        let All_Data_Arr = [];
        if (Catagory === "All") {
            Object.values(Props.Courses).forEach((Obj) => {
                Obj.forEach((Main_Obj) => {
                    All_Data_Arr.push(Main_Obj);
                })
            })
            return All_Data_Arr;
        }
        else {
            return Props.Courses[Catagory];
        }

    }
    Get_Courses();

    return (
        <div className='relative flex flex-row flex-wrap gap-3 justify-center' >
            {
                Get_Courses().map((Course) => {
                    return (<Card key={Course.id} Course={Course}></Card>);
                })
            }
        </div>
    );
}