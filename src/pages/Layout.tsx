import { Header, Footer, ActivityRegister } from "components";
import { GlobalProvider } from "contexts/GlobalContext";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <GlobalProvider>
            <Header />
            <ActivityRegister />
            <div className="relative flex justify-start w-full max-w-[1440px] ">
                <div className="px-8 pt-11 w-full xl:px-44 bg-prepaf-gray-50">
                    <Outlet />
                </div>
            </div>
            {/* <Footer /> */}
        </GlobalProvider>
    );
}
