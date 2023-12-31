import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

import { UserMenu } from "components/layout";
import logo from "assets/logo.png";

export function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const { pathname } = useLocation();

    return (
        <div className="flex justify-center w-screen max-w-full bg-prepaf-gray-200 border-b border-prepaf-gray-600/10">
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
                                <Link
                                    to="/players"
                                    className={`${
                                        pathname == "/players" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                >
                                    Jogadores
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    to="/activities"
                                    className={`${
                                        pathname == "/activities" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                >
                                    Atividades
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    to="/"
                                    className={`flex items-center gap-2 ${
                                        pathname == "/" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                >
                                    Relatórios
                                    <Icon
                                        icon="bxs:down-arrow"
                                        width="10"
                                        height="10"
                                    />
                                </Link>
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
                                showMenu
                                    ? "h-fit pt-1"
                                    : "h-0 py-0 m-0 border-0"
                            } flex flex-col justify-center items-center w-fit absolute z-10 mt-6 rounded
                        overflow-hidden transition-all border border-t-0 rounded-t-none border-prepaf-gray-600/10
                        bg-prepaf-gray-200 top-[58px] select-none`}
                        >
                            <li className="w-full">
                                <Link
                                    className={`flex justify-center py-2 px-4 hover:bg-gray-100 
                                    ${
                                        pathname == "/players" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                    to="/players"
                                >
                                    Jogadores
                                </Link>
                            </li>
                            <li className="w-full ">
                                <Link
                                    className={`flex justify-center py-2 px-4 hover:bg-gray-100
                                    ${
                                        pathname == "/activities" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                    to="/activities"
                                >
                                    Atividades
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    className={`flex gap-1 items-center justify-center py-2 px-4 hover:bg-gray-100 
                                    ${
                                        pathname == "/" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                    to="/"
                                >
                                    Relatórios
                                    <Icon
                                        icon="bxs:down-arrow"
                                        width="10"
                                        height="10"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <UserMenu />
                </div>
            </header>
        </div>
    );
}
