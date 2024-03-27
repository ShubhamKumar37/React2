import { useState } from "react";


export default function MainForm()
{

    const [FormData, setFormData] = useState(
        {
            Name:"", Email:"", Text:""   
        }
    );

    function ChangeHandler(Event)
    {
        setFormData((Prev) =>
        {
            return {
                ...Prev,
                [Event.target.name]: Event.target.value

            }
        })
        console.log(FormData);
    }

    function SubmitHandler(Event)
    {
        Event.preventDefault();
        console.log("Printing data for final time");
        console.log(FormData);
    }

    return (
        <div>
            <div>
                <div>
                    <button>Via Support Chat</button>
                    <button>Via Call</button>
                </div>
                <button>Via Email Form</button>
            </div>

            <form onSubmit={SubmitHandler}>
                <fieldset className="border border-black">
                    <legend>Name</legend>
                    <input type="text" name="Name" placeholder="Enter your name" onChange={ChangeHandler} value={FormData.Name}></input>
                </fieldset>
                <fieldset className="border border-black">
                    <legend>E-Mail</legend>
                    <input type="email" name="Email" placeholder="Enter your name" onChange={ChangeHandler} value={FormData.Email}></input>
                </fieldset>
                <fieldset className="border border-black">
                    <legend>Text</legend>
                    <input type="text" name="Text" placeholder="Enter your name" onChange={ChangeHandler} value={FormData.Text}></input>
                </fieldset>

                <button>Submit</button>
            </form>
        </div>
    );
}