import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div className="w-[80%] h-full flex flex-col gap-4 justify-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
