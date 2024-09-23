import { Link } from "react-router-dom";
import Profile from '../../public/profile.png'

function Header() {
  const navItems = [
    {
      label: "Home",
      slug: "/",
      icon: false,
      color: "#f1f5f9",
    },
    {
      label: "Blogs",
      slug: "",
      link: "https://blog.baruntiwary.dev",
      icon: false,
      color: "#6a99ff",
    },
    {
      label: "Projects",
      slug: "/projects",
      icon: false,
      color: "#f1f5f9",
    },
    {
      label: "Community",
      slug: "",
      link: "https://chat.whatsapp.com/K2Bp6fH99rpFAWJ8STqNNX",
      icon: false,
      color: "#25D366",
    },
  ];

  return (
    <div className="flex justify-end items-center pt-8 pb-[6rem]">
      <div className="flex items-center justify-between gap-16 bg-[#27272A] px-6 py-3 rounded-full border border-[#36363B]">
        <Link to={'/'} className="font-bold flex gap-2 justify-center items-center">
          <img src={Profile} alt="Barun Tiwary" className="h-8 w-8 rounded-full" />
          Barun Tiwary
        </Link>
        <div className="flex justify-between items-center w-fit gap-8 font-[inter]">
          {navItems.length > 0 &&
            navItems.map((item) =>
              item?.slug !== "" ? (
                <Link
                  to={item?.slug}
                  key={item?.slug}
                  className={`hover:text-[${item?.color}]`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item?.link}
                  target="_blank"
                  key={item?.link}
                  className={`hover:text-[${item?.color}]`}
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
