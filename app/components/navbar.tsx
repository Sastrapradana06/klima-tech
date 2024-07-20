import { Link, useLocation } from "@remix-run/react";
import {
  ChevronsDown,
  HandCoins,
  House,
  ListChecks,
  Menu,
  Send,
} from "lucide-react";
import { ReactNode, useState } from "react";

export const Navbar = () => {
  const { hash } = useLocation();
  const [isMenu, setIsMenu] = useState(false);

  const TextList = ({ teks, link }: { teks: string; link: string }) => {
    return (
      <Link to={link}>
        <li
          className={` hover:text-orange-500 duration-150 ${
            hash == link ? "text-orange-500" : "text-gray-600"
          }`}
        >
          {teks}
        </li>
      </Link>
    );
  };

  const TeksListIcons = ({
    icons,
    link,
  }: {
    icons: ReactNode;
    link: string;
  }) => {
    return (
      <Link
        to={link}
        className="p-2 rounded-full bg-[#ffa600] backdrop-blur-lg shadow-md"
      >
        {icons}
      </Link>
    );
  };

  return (
    <>
      <div
        className={`fixed w-max h-[300px]  right-[1.8rem] top-[3.8rem] transition-transform  lg:hidden  ${
          isMenu ? "translate-x-0" : "translate-x-[100px]"
        }`}
      >
        <ul className="w-full flex flex-col gap-2 items-center">
          <TeksListIcons icons={<House color="white" />} link={"#home"} />
          <TeksListIcons
            icons={<HandCoins color="white" />}
            link={"#services"}
          />
          <TeksListIcons
            icons={<ListChecks color="white" />}
            link={"#journey"}
          />
          <TeksListIcons icons={<Send color="white" />} link={"#contact"} />
        </ul>
      </div>

      <nav className="fixed z-30 top-0 m-auto left-0 w-full h-max">
        <div className="w-[90%] h-[50px] flex items-center justify-between px-4 lg:px-7 m-auto mt-2 rounded-xl bg-[#ffffff8c] backdrop-blur-lg">
          <div className="w-max h-max flex items-center gap-1">
            <img src="/logo1.svg" alt="logo" className="w-[20px]" />
            <h1 className="font-semibold lg:text-[1.2rem] tracking-[1px]">
              KlimaTech
            </h1>
          </div>
          <div className="w-max h-max  hidden lg:inline-block md:inline-block">
            <ul className="flex items-center gap-8 text-[.9rem] cursor-pointer font-semibold ">
              <TextList teks="Home" link="#home" />
              <TextList teks="Services" link="#services" />
              <TextList teks="Journey" link="#journey" />
              <TextList teks="Contact Us" link="#contact" />
            </ul>
          </div>
          <div className="w-max h-max lg:hidden md:hidden">
            <button onClick={() => setIsMenu(!isMenu)}>
              {isMenu ? <ChevronsDown size={30} /> : <Menu size={25} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
