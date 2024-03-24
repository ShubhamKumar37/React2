import { useState } from 'react';

export default function PracticeForm() {

    const [FormData, SetFormData] = useState({ FirstName: "", LastName: "", Email: "", Comment: "", IsVisible: true, Mode: "", FavGame: "" });

    function ChangeHandler(Event) {
        const { name, value, checked, type } = Event.target;
        SetFormData(PrevState => {
            return {
                ...PrevState,
                [name]: type === "checkbox" ? checked : value
            }
        }
        )

    }

    function SubmitHandler(Event) {
        Event.preventDefault();
        console.log("Now printing the entire data of the form");
        console.log(FormData);
    }
    console.log(FormData);

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <input className='border-2 border-black' onChange={ChangeHandler} type='text' placeholder='Enter your first name' name='FirstName' value={FormData.FirstName}></input>
                <br />
                <input className='border-2 border-black' onChange={ChangeHandler} type='text' placeholder='Enter your last name' name='LastName' value={FormData.LastName}></input>
                <br />
                <input className='border-2 border-black' onChange={ChangeHandler} type='mail' placeholder='Enter your Email@gmail.com' name='Email' value={FormData.Email}></input>
                <br />
                <textarea className='border-2 border-black' placeholder='Enter you comment' onChange={ChangeHandler} name='Comment' value={FormData.Comment}>

                </textarea>
                <br></br>

                <input type='checkbox' name="IsVisible" checked={FormData.IsVisible} id='Check' onClick={ChangeHandler}></input>
                <label htmlFor="Check">is that person is visible to you</label>
                <br></br>

                <input type='radio' name='Mode' id='Online_Mode' value='Online_Mode' checked={FormData.Mode === "Online_Mode" ? true : false} onClick={ChangeHandler}></input>
                <label htmlFor='Online_Mode'>Online mode</label>
                <br></br>
                <input type='radio' name='Mode' id='Offline_Mode' value='Offline_Mode' checked={FormData.Mode === "Offline_Mode" ? true : false} onClick={ChangeHandler}></input>
                <label htmlFor='Offline_Mode'>Offline mode</label>
                <br></br>

                <label htmlFor='Fab_Game'>What is your favoraite game</label>
                <select onChange={ChangeHandler} id='Fav_Game' name='FavGame' value={FormData.FavGame}>
                    <option htmlFor="Fav_Game" value="Grand Theft Auto">GTA</option>
                    <option htmlFor="Fav_Game" value="Free Fire">FF</option>
                    <option htmlFor="Fav_Game" value="Red Death Redemption">RDD</option>
                    <option htmlFor="Fav_Game" value="Mine Craft">MC</option>
                    <option htmlFor="Fav_Game" value="Clash Of Clans">COC</option>
                </select>

                <br></br>
                <button>Submit the data</button>
            </form>
        </div>
    );
}