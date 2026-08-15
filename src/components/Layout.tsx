import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <TopBar />
      <Navbar />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
