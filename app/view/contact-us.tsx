import { Mail, MoveRight, UserRound } from "lucide-react";

export default function ContactUsView() {
  return (
    <div className="w-full h-max mt-[70px] lg:mt-[50px]" id="contact">
      <div className="w-[85%] h-max  m-auto flex flex-col items-center gap-3  lg:flex-row-reverse lg:justify-center lg:gap-0">
        <div className="w-full h-max lg:w-[50%] ">
          <img
            src="/icons-contact.png"
            alt=""
            className="w-full h-[270px] object-contain lg:h-[350px]"
          />
        </div>
        <div className="w-full h-max  lg:w-max flex flex-col lg:justify-end lg:ml-20">
          <div className="w-max h-max">
            <h1 className="text-[1.1rem] font-semibold lg:text-[1.5rem]">
              Contact us
            </h1>
          </div>
          <div className="w-full h-max mt-2 flex flex-col gap-4 lg:w-[400px] ">
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
              className="w-full h-[100px] p-3 rounded-2xl bg-slate-100 outline-sky-500"
            ></textarea>
            <button className="w-[150px] h-max p-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center gap-2">
              Submit
              <MoveRight size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
