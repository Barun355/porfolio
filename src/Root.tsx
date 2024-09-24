import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div className="w-full md:w-[80%] h-full flex flex-col gap-4 justify-center items-center">
      <Header />
      <div className="w-[90%] md:w-auto flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
