import { Link, useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <>
      {isMenu && (
        <div className="fixed top-0 left-0 w-full h-[100vh] z-50 bg-[#00000042] flex justify-center">
          <button
            className="w-full h-full bg-transparent"
            onClick={() => setIsMenu(false)}
          ></button>
          <div className="w-[90%] z-10 h-max border mt-20 rounded-lg bg-slate-100 absolute top-0">
            <div className="w-full h-max p-2 flex justify-between items-center border-b border-black">
              <h1 className=" font-semibold">Menu</h1>
              <button onClick={() => setIsMenu(false)}>
                <X />
              </button>
            </div>
            <div className="w-max m-auto  h-max p-2">
              <ul className=" flex flex-col gap-3 font-semibold  items-center">
                <TextList teks="Home" link="#home" />
                <TextList teks="Services" link="#services" />
                <TextList teks="Journey" link="#journey" />
                <TextList teks="Contact Us" link="#contact" />
              </ul>
            </div>
          </div>
        </div>
      )}
      <nav className="fixed z-30 top-0 m-auto left-0 w-full h-max">
        <div className="w-[90%] h-[50px] flex items-center justify-between px-5 m-auto mt-2 rounded-xl bg-[#ffffff8c] backdrop-blur-lg">
          <div className="w-max h-max flex items-center gap-1">
            <img src="/logo1.svg" alt="logo" className="w-[20px]" />
            <h1 className="font-semibold lg:text-[1.2rem] tracking-[1px]">
              KlimaTech
            </h1>
          </div>
          <div className="w-max h-max  hidden lg:inline-block md:inline-block">
            <ul className="flex items-center gap-5 text-[.9rem] cursor-pointer font-semibold ">
              <TextList teks="Home" link="#home" />
              <TextList teks="Services" link="#services" />
              <TextList teks="Journey" link="#journey" />
              <TextList teks="Contact Us" link="#contact" />
            </ul>
          </div>
          <div className="w-max h-max lg:hidden md:hidden">
            <button onClick={() => setIsMenu(!isMenu)}>
              <Menu size={25} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
