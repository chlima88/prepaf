import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function Layout({ children }: Props) {
    return (
        <div className="container min-h-screen relative">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
