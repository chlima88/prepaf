import { LoginForm } from "components";
import bgimg from "assets/loginCover.png";

export function Login() {
    return (
        <div className="flex justify-center">
            <div className="overflow-hidden flex-1 h-screen">
                <img
                    className="w-full h-full object-cover"
                    src={bgimg}
                    alt=""
                />
            </div>
            <div className="flex items-center justify-center px-14 sm:px-20 ">
                <LoginForm />
            </div>
        </div>
    );
}
