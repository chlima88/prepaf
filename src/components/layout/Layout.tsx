import { Outlet } from "react-router-dom";

import { Header, Footer } from "components/layout";
import { GlobalProvider, ModalProvider } from "contexts";
import { ActivityRegister } from "components/activity-register";

export function Layout() {
    return (
        <GlobalProvider>
            <ModalProvider>
                <div className="relative flex flex-col items-center w-screen max-w-full min-h-screen">
                    <Header />
                    <ActivityRegister />
                    <div className="relative flex justify-start w-screen max-w-[1440px] mb-24">
                        <div className="px-8 pt-11 w-screen max-w-full xl:px-44 bg-prepaf-gray-50">
                            <Outlet />
                        </div>
                    </div>
                    <Footer />
                </div>
            </ModalProvider>
        </GlobalProvider>
    );
}
