import { useState } from "react";

export default function AdvanceForm()
{
    const [FormData, SetFormData] = useState({
        FirstName:"", LastName:"", Email:"", Country:"India", Address:"", City:"", State:"",
        Code:"", Comments:false, Candidates:false, Offers:false, DiffNotification:""
    });

    function ChangeHandler(Event)
    {
        const {name, type, value, checked} = Event.target;
        SetFormData((PrevData) =>
        {
            return {
                ...PrevData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function SubmitHandler(Event)
    {
        Event.preventDefault();
        console.log("Printing all the data ")
        console.log(FormData);
    }

    return (
        <div>
            <form onSubmit={SubmitHandler} className="relative">
                <label htmlFor="FirstName">First Name</label>
                <br />
                <input className="relative border-2 border-gray-700 rounded-md " id="FistName" type="text" name="FirstName" onChange={ChangeHandler} value={FormData.FirstName} placeholder="Enter your first name"></input>

                <br />
                <label htmlFor="LastName">Last Name</label>
                <br />
                <input className="relative border-2 border-gray-700 rounded-md " id="LastName" type="text" name="LastName" onChange={ChangeHandler} value={FormData.LastName} placeholder="Enter your last name"></input>

                <br />
                <label htmlFor="Email">Email address</label>
                <br />
                <input className="relative border-2 border-gray-700 rounded-md " id="Email" type="email" name="Email" onChange={ChangeHandler} value={FormData.Email} placeholder="Enter your email address"></input>

                <br />
                <label htmlFor="Country">Country</label>
                <br />
                <select className="relative border-2 border-gray-700 rounded-md" id="Country" name="Country" onChange={ChangeHandler} value={FormData.Country}>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                    <option value="Europe">Europe</option>
                </select>

                <br />
                <label htmlFor="Address">Street Address</label>
                <br />
                <input className="relative border-2 border-gray-700 rounded-md " id="Address" type="text" name="Address" onChange={ChangeHandler} value={FormData.Address} placeholder="Enter your address"></input>

                <br />
                <label htmlFor="City">City</label>
                <br />
                <input className="relative border-2 border-gray-700 rounded-md " id="City" type="text" name="City" onChange={ChangeHandler} value={FormData.City} placeholder="Enter your city"></input>

                <br />
                <label htmlFor="State">State/Province</label>
                <br />
                <input className="relative border-2 border-gray-700 rounded-md " id="State" type="text" name="State" onChange={ChangeHandler} value={FormData.State} placeholder="Enter your State"></input>

                <br />
                <label htmlFor="Code">ZIP/Postal code</label>
                <br />
                <input className="relative border-2 border-gray-700 rounded-md " id="Code" type="number" name="Code" onChange={ChangeHandler} value={FormData.Code} placeholder="Enter your area code"></input>
                
                <br />
                <p>By Email</p>

                <br />
                <input type="checkbox" name="Comments" checked={FormData.Comments} id="Comments" onChange={ChangeHandler}></input>
                <label htmlFor="Comments">
                    <>Comments</>
                    <p>Get notified when someones posts a comment on a posting.</p>
                </label>
                <br />
                <input type="checkbox" name="Candidates" checked={FormData.Candidates} id="Candidates" onChange={ChangeHandler}></input>
                <label htmlFor="Candidates">
                    <>Candidates</>
                    <p>Get notified when a candidate applies for a job.</p>
                </label>
                <br />
                <input type="checkbox" name="Offers" checked={FormData.Offers} id="Offers" onChange={ChangeHandler}></input>
                <label htmlFor="Offers">
                    <>Offers</>
                    <p>Get notified when a candidate accepts or rejects an offer.</p>
                </label>

                <br />
                <div>
                    <h3>Push Notifications</h3>
                    <p>There are delivered via SMS to your mobile phone.</p>
                </div>
                
                <br />
                <input type="radio" name="DiffNotification" id="Everything" onChange={ChangeHandler} checked={FormData.DiffNotification === "Everything" ? true : false} value="Everything"></input>
                <label htmlFor="Everything">Everything</label>

                <br />
                <input type="radio" name="DiffNotification" id="Send_Email" onChange={ChangeHandler} checked={FormData.DiffNotification === "Send a email" ? true : false} value="Send a email"></input>
                <label htmlFor="Send_Email">Send a email</label>

                <br />
                <input type="radio" name="DiffNotification" id="No_Notification" onChange={ChangeHandler} checked={FormData.DiffNotification === "No push notifications" ? true : false} value="No push notifications"></input>
                <label htmlFor="No_Notification">No push notifications</label>

                <br />
                <button>Save</button>
            </form>
        </div>
    );
}