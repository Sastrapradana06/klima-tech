import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <div className="w-full h-max mt-[100px]  relative">
      <div className="w-[85%] h-[60px] rounded-xl z-10 left-0 right-0 bg-orange-500 m-auto lg:w-[70%] absolute -top-[30px] flex items-center justify-between px-4  lg:px-10 lg:text-[1.3rem]">
        <h1 className="text-white font-semibold">Ready to get started</h1>
        <Link to={"https://api.whatsapp.com/send?phone=6283870915417"}>
          <button className="border-2 border-white w-[100px] py-1 text-white text-[.9rem] rounded-xl lg:w-[130px] hover:bg-slate-100 hover:text-black duration-150">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="w-full h-[80px] bg-[#ffffffc5] backdrop-blur-lg flex justify-center items-center text-[.8rem]">
        <p className="mt-6 text-gray-500">All right reserved 2024 |</p>
        <Link
          rel="noopener noreferrer"
          to="https://sastrapradana66.vercel.app/"
          className="text-orange-500 font-semibold mt-6 ml-1 hover:text-orange-600"
        >
          sastrapradana
        </Link>
      </div>
    </div>
  );
}
