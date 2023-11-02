import bgimg from "assets/loginCover.png";
import logo from "assets/logoColorful.svg";
import prepaf from "assets/Prepaf.png";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center">
            <div className="overflow-hidden flex-1 h-screen">
                <img
                    className="w-full h-full object-cover"
                    src={bgimg}
                    alt=""
                />
            </div>
            <div className="flex items-center justify-center px-[80px] ">
                <div className="flex flex-col justify-center gap-3">
                    <div className="flex items-center justify-between gap-8 mb-3 ">
                        <img src={logo} className="w-22" />
                        <img src={prepaf} className="w-full" />
                    </div>
                    <label htmlFor="emailInput">Endereço de E-mail:</label>
                    <input
                        className="input-gray h-[50px] "
                        id="emailInput"
                        type="text"
                    />
                    <label htmlFor="passwordInput">Senha:</label>
                    <input
                        className="input-gray h-[50px] mb-3"
                        id="passwordInput"
                        type="text"
                    />
                    <button
                        className="block btn-green"
                        onClick={() => navigate("/players")}
                    >
                        Iniciar Sessão
                    </button>
                    <Link className="text-center" to="/activities">
                        Esqueceu a Senha?
                    </Link>
                </div>
            </div>
        </div>
    );
}
