import { Outlet } from "react-router-dom";

import { Header, Footer, ActivityRegister } from "components";
import { GlobalProvider } from "contexts/GlobalContext";

export function Layout() {
    return (
        <GlobalProvider>
            <div className="relative flex flex-col items-center w-full min-h-screen">
                <Header />
                <ActivityRegister />
                <div className="relative flex justify-start w-full max-w-[1440px] mb-24">
                    <div className="px-8 pt-11 w-full xl:px-44 bg-prepaf-gray-50">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </GlobalProvider>
    );
}
