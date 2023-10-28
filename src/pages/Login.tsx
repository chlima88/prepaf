import bgimg from "assets/sven-kucinic-Z0KjmjxUsKs-unsplash 1.png";
import logo from "assets/Group.svg";
import prepaf from "assets/Prepaf.png";
import { Link } from "react-router-dom";
export function Login() {
    return (
        <div className="flex justify-center">
            <div className="overflow-hidden h-screen">
                <img className="max-w-max " src={bgimg} alt="" />
            </div>
            <div className="flex items-center justify-center px-[8rem] ">
                <div className="flex flex-col justify-center gap-6">
                    <div className="flex items-center justify-between gap-10 mb-6 ">
                        <img src={logo} className="w-32" />
                        <img src={prepaf} className="" />
                    </div>
                    <label htmlFor="emailInput">Endereço de E-mail:</label>
                    <input className="input-gray" id="emailInput" type="text" />
                    <label htmlFor="passwordInput">Senha:</label>
                    <input
                        className="input-gray mb-6"
                        id="passwordInput"
                        type="text"
                    />
                    <button className="block btn-green">Iniciar Sessão</button>
                    <Link className="text-center" to="/activities">
                        Esqueceu a Senha?
                    </Link>
                </div>
            </div>
        </div>
    );
}
