import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            {/* <Sidebar /> */}
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
