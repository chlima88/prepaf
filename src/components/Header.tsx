import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import userIcon from "assets/userIcon.svg";
import { useState } from "react";

export function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    return (
        <div className="flex justify-center w-full bg-prepaf-gray-200">
            <header className="flex items-center justify-between py-4 px-8 xl:px-44 w-[1440px]">
                <div className="flex items-center gap-16 xl:gap-32">
                    <Link to={""}>
                        <div className="flex-shrink-0">
                            <img src={logo} />
                        </div>
                    </Link>
                    <nav className="select-none">
                        <ul className="hidden md:flex justify-between gap-6 lg:gap-10 xl:gap-20 transition-all">
                            <li className="">
                                <Link to="/players">Jogadores</Link>
                            </li>
                            <li className="">
                                <Link to="/activities">Atividades</Link>
                            </li>
                            <li className="flex items-center gap-2 ">
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
                <div className="flex items-center gap-4">
                    <nav className="select-none">
                        <button
                            className="md:hidden flex items-center gap-2 h-fit p-0.5
                            bg-prepaf-orange-400 hover:bg-prepaf-orange-200 text-white transition-colors"
                            onBlur={() =>
                                setTimeout(() => setShowMenu(false), 100)
                            }
                            onMouseDown={() => {
                                setShowMenu(!showMenu);
                            }}
                        >
                            {showMenu ? (
                                <Icon icon="fe:close" width={25} />
                            ) : (
                                <Icon icon="ci:hamburger-md" width={25} />
                            )}
                        </button>
                        <ul
                            className={`${
                                showMenu ? "h-28" : "h-0 py-0 m-0"
                            } flex flex-col justify-center gap-4 absolute z-10 mt-3 p-4 rounded
                            overflow-hidden transition-all bg-prepaf-gray-200 md:hidden`}
                        >
                            <li className="">
                                <Link to="/players">Jogadores</Link>
                            </li>
                            <li className="">
                                <Link to="/activities">Atividades</Link>
                            </li>
                            <li className="flex items-center gap-2 ">
                                <Link to="/">Relatórios</Link>
                                <Icon
                                    icon="bxs:down-arrow"
                                    width="10"
                                    height="10"
                                />
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center justify-center gap-3 ">
                        <button
                            className="group flex items-center gap-1 select-none "
                            onBlur={() =>
                                setTimeout(() => setShowUserMenu(false), 100)
                            }
                            onMouseDown={() => setShowUserMenu(!showUserMenu)}
                        >
                            <p className="hidden md:block m-3 group-hover:text-prepaf-orange-400 transition-colors">
                                Foca Silva
                            </p>
                            <div className="w-11">
                                <img src={userIcon} />
                            </div>
                            <Icon
                                className="block md:hidden group-hover:text-prepaf-orange-400 transition-colors"
                                icon="bxs:down-arrow"
                                width="10"
                                height="10"
                            />
                        </button>
                        <ul
                            className={`${
                                showUserMenu ? "h-fit" : "h-0 py-0 m-0"
                            } flex flex-col justify-center items-center gap-4 md:w-40 absolute z-10 mt-3 p-4 rounded
                            overflow-hidden transition-all border-prepaf-gray-600/20
                            bg-prepaf-gray-200 top-14 select-none`}
                        >
                            <li>
                                <Link to="/players">Profile</Link>
                            </li>
                            <li>
                                <Link to="/activities">Settings</Link>
                            </li>
                            <li>
                                <Link to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}
