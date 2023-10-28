import { Icon } from "@iconify/react";
import logo from "assets/Vector.svg";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <header className="flex items-center justify-between py-5 px-56 w-screen bg-gray-200">
                <div className="flex items-center gap-32">
                    <div className="flex items-center gap-4">
                        <img src={logo} className="inline" />
                        <p className="inline text-prepaf-orange text-4xl font-bold">
                            PREPAF
                        </p>
                    </div>
                    <nav>
                        <ul className="flex justify-between gap-20">
                            <li>
                                <Link to="/players">Jogadores</Link>
                            </li>
                            <li>
                                <Link to="/activities">Atividades</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <Link to="/">Relatórios</Link>
                                <Icon
                                    icon="bxs:down-arrow"
                                    width="10"
                                    height="10"
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-3 ">
                    <p>Foca Silva</p>
                    <Icon
                        className="text-gray-600"
                        icon="carbon:user-avatar-filled"
                        width="40"
                        height="40"
                    />
                    <Icon icon="bxs:down-arrow" width="10" height="10" />
                </div>
            </header>
        </>
    );
}
