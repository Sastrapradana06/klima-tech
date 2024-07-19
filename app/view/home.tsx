import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function HomeView() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Unlock your digital potential with our expert web development services. From digital invitation websites to landing pages and academic assignments, we provide tailored solutions to meet your needs",
      ],
      typeSpeed: 20,
      backSpeed: 20,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full h-max  mt-20 lg:mt-[7rem]">
      <div className="w-[90%] h-[400px] m-auto  flex flex-col f gap-6  pt-1 lg:pt-14 lg:items-center lg:flex-row-reverse lg:w-[85%]">
        <div className="w-full h-max lg:w-[50%]">
          <img src="/3dhome1.png" alt="" className="object-cover w-full" />
        </div>
        <div className="w-full  h-max flex flex-col gap-4 lg:w-[50%]">
          <h1 className="text-[1.7rem] w-[90%]  font-semibold capitalize lg:w-[65%] lg:text-[2.2rem]">
            we create{" "}
            <span className="font-semibold text-orange-500">solutions</span> for
            your digital needs.
          </h1>
          <p
            className="text-gray-600 text-[.9rem] lg:text-[1rem]  h-[100px]"
            ref={textRef}
          ></p>
          <button className="w-[150px] h-[40px]  rounded-full bg-orange-500 text-white hover:bg-orange-600 duration-200 ">
            Contact Me
          </button>
          <div
            className="flex gap-2 items-center mt-3 animate-bounce"
            id="services"
          >
            <div className="p-1 rounded-full bg-white ">
              <ChevronDown fill="orange" />
            </div>
            <span className="text-[.7rem]  font-semibold lg:text-[.9rem] tracking-[1px] ">
              Explore More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
