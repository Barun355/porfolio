import { Link } from "react-router-dom";
import Profile from "../../public/profile.png";
import { useState } from "react";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const navItems = [
    {
      label: "Home",
      slug: "/",
      icon: false,
      color: "slate",
    },
    {
      label: "Blogs",
      slug: "",
      link: "https://blog.baruntiwary.dev",
      icon: false,
      color: "blue",
    },
    {
      label: "Projects",
      slug: "/projects",
      icon: false,
      color: "slate",
    },
    {
      label: "Community",
      slug: "",
      link: "https://chat.whatsapp.com/K2Bp6fH99rpFAWJ8STqNNX",
      icon: false,
      color: "green",
    },
  ];

  return (
    <div className="flex relative flex-col justify-center lg:justify-center w-full items-center lg:items-end pt-0 md:pt-8 pb-[4rem] md:pb-[6rem]">
      <div className="flex items-center justify-between gap-16 bg-[#27272A] px-6 py-3 border-b md:border border-[#36363B] w-full rounded-none lg:w-fit md:rounded-full">
        <Link
          to={"/"}
          className="font-bold flex gap-3 justify-center items-center"
        >
          <img
            src={Profile}
            alt="Barun Tiwary"
            className="h-8 w-8 rounded-full"
          />
          Barun Tiwary
        </Link>
        <div className="md:flex justify-between items-center w-fit gap-8 font-[inter] text-[#d9e3f8] hidden">
          {navItems.length > 0 &&
            navItems.map((item) =>
              item?.slug !== "" ? (
                <Link
                  to={item?.slug}
                  key={item?.slug}
                  className={`hover:text-${item.color}-400`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item?.link}
                  target="_blank"
                  key={item?.link}
                  className={`hover:text-${item.color}-400`}
                >
                  {item?.label}
                </a>
              )
            )}
        </div>
        <button onClick={(_) => setSidebar(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 block md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className={`absolute  ${sidebar? "h-screen w-full opacity-100 z-10": "h-0 w-0 opacity-0 z-0"} transition-all duration-500 bg-[#36363b] top-0 left-0 p-8 flex flex-col gap-20`}>
        <div className="flex justify-between gap-2">
          <Link
            to={"/"}
            className="font-bold flex gap-2 justify-center items-center"
          >
            <img
              src={Profile}
              alt="Barun Tiwary"
              className="h-8 w-8 rounded-full"
            />
            Barun Tiwary
          </Link>
          <button onClick={(_) => setSidebar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start w-fit gap-8 font-[inter] text-[#d9e3f8]">
          {navItems.length > 0 &&
            navItems.map((item) =>
              item?.slug !== "" ? (
                <Link
                  to={item?.slug}
                  key={item?.slug}
                  className={`hover:text-${item.color}-400`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item?.link}
                  target="_blank"
                  key={item?.link}
                  className={`hover:text-${item.color}-400`}
                >
                  {item?.label}
                </a>
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default Header;
