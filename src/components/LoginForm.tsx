import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "assets/logoColorful.svg";
import prepaf from "assets/Prepaf.png";

export function LoginForm() {
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        navigate("/players");
    }

    return (
        <form
            className="flex flex-col justify-center gap-3"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center justify-between gap-8 mb-3 ">
                <div className="max-w-[80px]">
                    <img src={logo} className="w-full" />
                </div>
                <div className="max-w-fit">
                    <img src={prepaf} className="w-full" />
                </div>
            </div>
            <label htmlFor="emailInput">Endereço de E-mail:</label>
            <input
                className="bg-prepaf-gray-100 px-4 h-[50px] "
                id="emailInput"
                type="email"
                autoComplete="username"
            />
            <label htmlFor="passwordInput">Senha:</label>
            <input
                className="bg-prepaf-gray-100 px-4 h-[50px] mb-3"
                id="passwordInput"
                type="password"
                autoComplete="current-password"
                required
            />
            <button className="block btn-green" type="submit">
                Iniciar Sessão
            </button>
            <Link className="text-center" to="/activities">
                Esqueceu a Senha?
            </Link>
        </form>
    );
}
