import { CardServices } from "~/components/card-services";

export default function ServicesView() {
  const servicesData = [
    {
      icons: "/icons-wedding.png",
      title: "Wedding Web",
      description:
        "Create stunning digital wedding invitations. Personalized elegant, and eco-friendly.",
    },
    {
      icons: "/joki-icons.png",
      title: "Joki Tugas Web",
      description:
        "Get professional help with your web assignments. Cheap prices with the best quality.",
    },
    {
      icons: "/landing-icons.png",
      title: "Landing Page Web",
      description:
        "Promote your business in a modern and professional-looking way using a website",
    },
  ];

  return (
    <div className="w-full h-max mt-[350px]  lg:mt-[150px] ">
      <div className="w-[90%] max-h-max m-auto  lg:w-[85%]">
        <div className="w-full h-max text-center">
          <h1 className="text-[1.1rem] font-semibold lg:text-[1.4rem]">
            We Provide The Best{" "}
            <span className="text-orange-500">Services</span>
          </h1>
          <p className="mt-2 text-[.8rem]  text-gray-500 font-semibold w-[250px] m-auto lg:w-[300px]">
            Innovative solutions, exceptional results. Your success, our
            commitment.
          </p>
        </div>
        <div className="w-full h-max mt-5 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          {servicesData.map((data, i) => (
            <CardServices
              id={i}
              key={i}
              icons={data.icons}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
