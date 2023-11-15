import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div>
      <Navbar />,
      <main className="cite_container ">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
