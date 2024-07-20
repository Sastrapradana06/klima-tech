import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import { Navbar } from "~/components/navbar";
import ContactUsView from "~/view/contact-us";
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
        <ContactUsView />
        <Footer />
      </div>
    </main>
  );
}
