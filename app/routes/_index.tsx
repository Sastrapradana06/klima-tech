import type { MetaFunction } from "@remix-run/node";
import { Navbar } from "~/components/navbar";
import HomeView from "~/view/home";
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
    <main className="w-full h-max  text-black pb-10">
      <div className="w-full h-max p-2 relative" id="home">
        <Navbar />
        <HomeView />
        <ServicesView />
      </div>
    </main>
  );
}
