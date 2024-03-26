import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function Pages()
{

    const {Page, TotalPages, changePageHandler} = useContext(AppContext);

    return (
        <div>
            <div>
                {
                    Page < TotalPages && 
                    <button onClick={() => changePageHandler(Page + 1)}>Next</button>
                }
                {
                    Page > 1 && 
                    <button onClick={() => changePageHandler(Page - 1)}>Previous</button>
                }
            </div>
            <div>
                <p>Page {Page} of {TotalPages} total pages</p>
            </div>
        </div>
    );
}