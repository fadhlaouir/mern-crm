import React from "react";
import { Header } from "./partials/Header.comp";
import { Footer } from "./partials/Footer.comp";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout" >
    <div style={{display:'flex'}}>
      <header className="header ">
        <Header />
      </header>

      <main className="main">{children}</main>
    </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
