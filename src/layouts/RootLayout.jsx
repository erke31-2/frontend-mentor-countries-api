import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <header className="w-full dark:bg-DarkBlue drop-shadow-2xl bg-White shadow-xl shadow-black/10">
        <Navbar />
      </header>
      <main className="min-h-screen min-w-full dark:bg-DarkBlueDark bg-LightGrayLight">
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
