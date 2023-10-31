import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import userIcon from "assets/userIcon.svg";

export function Header() {
    return (
        <div className="flex justify-center w-full bg-prepaf-gray-200">
            <header className="flex items-center justify-between py-4 px-8 xl:px-44 w-[1440px]">
                <div className="flex items-center gap-16 xl:gap-32">
                    <div className="flex-shrink-0">
                        <img src={logo} />
                    </div>
                    <nav>
                        <ul className="hidden lg:flex justify-between gap-10 xl:gap-20">
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
                    <p className="hidden xl:block">Foca Silva</p>
                    <div className="w-11">
                        <img src={userIcon} />
                    </div>
                    <Icon icon="bxs:down-arrow" width="10" height="10" />
                </div>
            </header>
        </div>
    );
}
