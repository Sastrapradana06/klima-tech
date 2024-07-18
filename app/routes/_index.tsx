import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navbar } from "~/components/navbar";
import HomeView from "~/view/home";
import JourneyView from "~/view/journey";
import ServicesView from "~/view/services";

export const meta: MetaFunction = () => {
  return [
    { title: "Klima Tech" },
    {
      name: "Website landing page, Klima Tech",
      content: "Welcome to KlimaTech ",
    },
  ];
};

export default function Index() {
  return (
    <main className="w-full h-max  text-black">
      <div className="w-full h-max  relative" id="home">
        <Navbar />
        <HomeView />
        <ServicesView />
        <JourneyView />
        <div className="w-full h-max mt-[100px]  relative">
          <div className="w-[85%] h-[60px] rounded-xl z-10 left-0 right-0 bg-orange-500 m-auto lg:w-[70%] absolute -top-[30px] flex items-center justify-between px-4  lg:px-10 lg:text-[1.3rem]">
            <h1 className="text-white font-semibold">Ready to get started</h1>
            <button className="border-2 border-white w-[100px] py-1 text-white text-[.9rem] rounded-xl lg:w-[130px]">
              Contact Us
            </button>
          </div>
          <div className="w-full h-[80px] bg-[#ffffffc5] backdrop-blur-lg flex justify-center items-center text-[.8rem]">
            <p className="mt-6 text-gray-500">All right reserved 2024 |</p>
            <Link
              to="/privacy-policy"
              className="text-orange-500 font-semibold mt-6 ml-1"
            >
              sastrapradana
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
