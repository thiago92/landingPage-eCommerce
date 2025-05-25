import Footer from "@/components/features/footer/Footer";
import Header from "@/components/features/header/Header";
import { Outlet } from "react-router-dom";

export default function Main() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>  
    )
}