import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import MobileMenu from "./MobileMenu";
import DarkToggle from "./DarkToggle";
import LanguageNav from "./LanguageNav";
import { Tooltip } from "react-tooltip";
import DivisionList from "../../../components/Banches/DivisionList";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface NavLink {
  path: string;
  title: string;
}

const Navbar: React.FC = () => {
  const { email } = useSelector((state: RootState) => state.userState)
  const [open, setOpen] = useState(false);

  const navlinks: NavLink[] = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/aboutUs",
      title: "About Us",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/doctors",
      title: "Doctors",
    },
    {
      path: "/gallery",
      title: "Gallery",
    },
    {
      path: "/branches",
      title: "Branches",
    },
    {
      path: "/pharmacy",
      title: "Pharmacy",
    },
    {
      path: "/newsMedia",
      title: "News & Media",
    },
  ];
  const jsonData = {
    Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail", "Manikganj"],
    Chittagong: ["Chattogram", "Cox's Bazar", "Feni", "Comilla", "Noakhali"],
    Rajshahi: ["Rajshahi", "Bogura", "Pabna", "Naogaon", "Chapainawabganj"],
    Khulna: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Magura"],
    Barisal: ["Barisal", "Bhola", "Patuakhali", "Pirojpur", "Jhalokati"],
    Sylhet: [
      "Sylhet",
      "Moulvibazar",
      "Habiganj",
      "Sunamganj",
      "Sylhet",
    ],
    "Rangpur ": [
      "Rangpur",
      "Dinajpur",
      "Kurigram",
      "Lalmonirhat",
      "Thakurgaon",
    ],
    "Mymensingh ": [
      "Mymensingh",
      "Jamalpur",
      "Netrokona",
      "Sherpur",
      "Kishoreganj",
    ],
  };

  return (
    <header className="sticky top-0 z-50 bg-white ">
      <nav className="container relative flex items-center justify-between px-2 lg:px-0 mx-auto 2xl:h-24 lg:py-1.5 2xl:py-2">
        <div>
          <Link to="/">
            <img src={logo} className="h-12 2xl:h-14 object-cover" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col items-center justify-between gap-6 2xl:gap-10 md:flex-row">
            {navlinks.map((link) => (
              <li key={link.path} className="relative ">
                <NavLink
                  className="font-medium text-textBlack hover:text-secondary nav-link"
                  to={link.path}
                >
                  {link.title === "Branches" ? (
                    <h1 data-tooltip-id="my-tooltip-2">{link.title}</h1>
                  ) : (
                    <h1>{link.title}</h1>
                  )}
                  <Tooltip
                    id="my-tooltip-2"
                    place="bottom"
                    variant="light"
                    content={
                      <div className="container px-3 py-5 mx-auto">
                        <DivisionList data={jsonData} />
                      </div>
                    }
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex justify-between items-center gap-6 2xl:gap-10">
          <DarkToggle />
          <LanguageNav />
          {email ? (
            <img className="w-10 h-10 object-cover rounded-lg" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693057174/Website-assets/LifeCare/pexels-polina-tankilevitch-3873191_sobg4q.jpg" alt="" />
          ) : (
            <Link to="/login" className="bttn common-btn text-textBlack">
              login
            </Link>
          )}
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <GrClose size={27} color="secondary" />
          ) : (
            <BiMenuAltRight size={35} color="secondary" />
          )}
        </div>
        <div
          className={` absolute duration-300 ease-out ${open
            ? "left-0 top-[56px] md:-left-[30px]"
            : "-left-[220px] top-[56px] bottom-0 md:-left-[220px]"
            }`}
        >
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
