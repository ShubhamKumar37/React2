import Rect, { useState } from 'react';

export default function TextFrom(Props) {

    const Handle_Change = (Event) => {
        SetText(Event.target.value);
        console.log("Value Changed");
    }

    const Handle_Change_UpperCase = () => {
        console.log("Value Changed to UpperCase");
        const New_Text = Text.toUpperCase();
        SetText(New_Text);
    }

    const Handle_Change_LowerCase = () => {
        console.log("Value Changed to LowerCase");
        const New_Text = Text.toLowerCase();
        SetText(New_Text);
    }

    const Handle_Change_Clear = () => {
        console.log("Cleared");
        const New_Text = "";
        SetText(New_Text);
    }

    const Handle_Change_Capital_Case = () => {
        console.log("Value changed to Capital case");
        let Arr = Text.split(" ");
        Arr = Arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        SetText(Arr.join(" "));
    }

    const Handle_Change_Altering_Case = () => {
        let Arr = Text.split(" ");
        for (let i = 0; i < Arr.length; i++) {
            let Splited_Arr = Arr[i].split('');
            let Flag = true;
            for (let j = 0; j < Arr[i].length; j++) {
                if (Flag) {
                    Splited_Arr[j] = Splited_Arr[j].toUpperCase();
                }
                else {
                    Splited_Arr[j] = Splited_Arr[j].toLowerCase();
                }
                Flag = !Flag;
            }
            Arr[i] = Splited_Arr.join("");
        }

        SetText(Arr.join(" "));
    }

    const [Text, SetText] = useState("");
    // Text = "This is me "; this is wrong way to update a text;
    // SetText("Now Enter again here "); // This is correct way to update text;
    return (
        <>
            <div className="container">
                <div>
                    <span className="input-group-text">{Props.Heading}</span>
                </div>
                <textarea placeholder='Leave a comment or your random text' className="form-control" id="MyBox" value={Text} onChange={Handle_Change} aria-label="With textarea" rows={8}></textarea>
                <button className="btn btn-primary mx-1" onClick={Handle_Change_UpperCase}>Convert to upper case</button>
                <button className="btn btn-primary mx-1" onClick={Handle_Change_LowerCase}>Convert to lower case</button>
                <button className="btn btn-primary mx-1" onClick={Handle_Change_Capital_Case}>Convert to Capital case</button>
                <button className="btn btn-primary mx-1" onClick={Handle_Change_Altering_Case}>Convert to aLtErNaTiNg cAsE</button>
                <button className="btn btn-primary mx-1" onClick={Handle_Change_Clear}>Clear All!</button>
            </div>

            <div className='container my-2'>
                <h3>Your Text summary </h3>
                <p>You entered {Text.length} characters and {Text.split(" ").length - 1} words</p>
                <h3>Heres the preview of the written text </h3>
                <p className='border px-2 py-2'>{Text}</p>
            </div>
        </>
    );
}