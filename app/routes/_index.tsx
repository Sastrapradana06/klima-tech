import type { MetaFunction } from "@remix-run/node";
import { Navbar } from "~/components/navbar";

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
    <main className="w-full min-h-[100vh] max-h-max border border-black text-black">
      <div className="w-full h-max p-2 relative">
        <Navbar />
      </div>
    </main>
  );
}
