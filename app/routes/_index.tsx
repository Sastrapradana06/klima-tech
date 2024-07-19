import type { MetaFunction } from "@remix-run/node";
import { Mail, UserRound } from "lucide-react";
import Footer from "~/components/footer";
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
        <div className="w-full h-max mt-[50px] " id="contact">
          <div className="w-[85%] h-max  m-auto flex flex-col items-center gap-3  lg:flex-row-reverse lg:justify-center">
            <div className="w-full h-max lg:w-[50%] ">
              <img
                src="/icons-contact.png"
                alt=""
                className="w-full h-[250px] object-contain lg:h-[300px] "
              />
            </div>
            <div className="w-full h-max  lg:w-max flex flex-col lg:justify-end ">
              <div className="w-max h-max">
                <h1 className="text-[1.1rem] font-semibold lg:text-[1.5rem]">
                  Contact us
                </h1>
              </div>
              <div className="w-full h-max mt-2 flex flex-col gap-4 lg:w-[400px]">
                <div className="w-full flex items-center p-3 gap-1 rounded-2xl bg-slate-100">
                  <UserRound size={20} color="orange" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full h-full bg-transparent text-[.9rem] text-black outline-none"
                  />
                </div>
                <div className="w-full flex items-center p-3 gap-1 rounded-2xl bg-slate-100">
                  <Mail size={20} color="orange" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-full bg-transparent text-[.9rem] text-black outline-none"
                  />
                </div>
                <textarea
                  name="pesan"
                  placeholder="Message"
                  id=""
                  className="w-full h-[1003x] p-2 rounded-2xl bg-slate-100"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
