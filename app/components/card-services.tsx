export const CardServices = ({
  id,
  icons,
  title,
  description,
}: {
  id: number;
  icons: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-[85%] h-[200px] bg-slate-100 rounded-lg shadow-xl lg:w-[30%] lg:flex-row lg:justify-center">
      <div
        className={`w-[50%] h-[80px] rounded-r-full flex justify-center items-center ${
          id == 0 ? "bg-violet-400" : id == 1 ? "bg-orange-500" : "bg-teal-400"
        }`}
      >
        <img src={icons} alt="" className="w-[50px] mr-3" />
      </div>
      <div className="w-[90%] m-auto h-max mt-2">
        <h1 className="font-semibold text-[1.1rem] capitalize">{title}</h1>
        <p className="mt-1 text-[.8rem] text-gray-400 lg:text-[.9rem] lg:text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

// Create stunning digital wedding invitations. Personalized,
//             elegant, and eco-friendly.
