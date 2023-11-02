import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import userIcon from "assets/userIcon.svg";

export function UserMenu() {
    const [showUserMenu, setShowUserMenu] = useState(false);

    console.log("UserMenu");
    return (
        <div className="flex items-center justify-center gap-3 ">
            <button
                className="group flex items-center gap-1 select-none "
                onBlur={() => setTimeout(() => setShowUserMenu(false), 100)}
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
                    showUserMenu ? "h-fit pt-1" : "h-0 p-0 m-0 border-0"
                } flex flex-col justify-center items-center w-fit absolute z-10 mt-6 rounded
            overflow-hidden transition-all border border-t-0 rounded-t-none border-prepaf-gray-600/10
            bg-prepaf-gray-200 top-[58px] select-none`}
            >
                <li className="w-full">
                    <Link
                        className="flex items-center justify-start py-2 px-3  md:pl-6 md:pr-8 hover:bg-gray-100"
                        to="/players"
                    >
                        <Icon
                            className="hidden md:block mr-3"
                            icon="ri:user-settings-line"
                            width={23}
                        />
                        <span>Profile</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        className="flex items-center justify-start py-2  px-3  md:pl-6 md:pr-8 hover:bg-gray-100"
                        to="/activities"
                    >
                        <Icon
                            className="hidden md:block mr-3"
                            icon="carbon:settings"
                            width={23}
                        />
                        <span>Settings</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        className="flex items-center justify-start py-2 px-3 md:pl-6 md:pr-8 hover:bg-gray-100"
                        to="/"
                    >
                        <Icon
                            className="hidden md:block mr-3"
                            icon="line-md:logout"
                            width={23}
                        />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
