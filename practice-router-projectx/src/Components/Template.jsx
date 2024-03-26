import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";


export default function Template({ Title, Desc1, Desc2, Img, FrameImg, SetIsLogged, Type }) {
    return (
        <div>
            <div>
                <h1>{Title}</h1>

                <div>
                    <p>
                        {Desc1}
                    </p>
                    <p>
                        {Desc2}
                    </p>
                </div>

                <div>
                    {Type === 'login' ?
                    <LoginForm SetIsLogged={SetIsLogged}></LoginForm>:
                    <SignupForm  SetIsLogged={SetIsLogged}></SignupForm>}
                </div>

                <div>
                    <button>Log with Goggle</button>
                </div>
            </div>
            <div>
                <img src={Img}></img>
                <img src={FrameImg}></img>
            </div>

        </div>
    );
}