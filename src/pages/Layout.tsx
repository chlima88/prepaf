import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <div className="flex justify-center w-[1440px]">
                <div className="">{children}</div>
            </div>
            <Footer />
        </>
    );
}
