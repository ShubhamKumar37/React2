import ContactLogo from "../Images/ContactLogo.svg";
import MainForm from "./MainForm";

export default function ContactForm()
{
    return (
        <div className="relative w-full flex flex-col gap-3">
            <div>
                <h1 className="font-bold text-[4rem]">Contact Us</h1>
                <p className="text-gray-600 text-sm">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
            </div>

            <div className="flex flex-row gap-3 mx-auto">
                <div>
                    <MainForm></MainForm>
                </div>
                <img src={ContactLogo} className="w-[40rem]"></img>
            </div>
            
        </div>
    );
}