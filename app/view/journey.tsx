export default function JourneyView() {
  return (
    <div className="w-full h-max mt-[100px] " id="journey">
      <div className="w-[85%] h-max lg:h-[500px]  m-auto  flex flex-col gap-2 lg:flex-row lg:justify-center lg:items-center">
        <div className="w-full h-[300px] lg:h-[400px] lg:w-[40%]">
          <img
            src="/3dhome2.png"
            alt=""
            className="w-full h-full object-contain "
          />
        </div>
        <div className="w-full h-max  lg:w-[40%] flex flex-col gap-1">
          <h1 className="text-[1.3rem] text-center lg:text-start font-semibold lg:text-[1.6rem]">
            Simple <span className="text-orange-500">Solutions!</span>
          </h1>
          <p className="text-gray-500 text-[.8rem] lg:text-[.9rem] text-center lg:text-start font-semibold">
            We understand that each need has its own uniqueness. That&apos;s why
            we take the time to truly understand your needs.
          </p>
          <div className="w-full h-max flex gap-4 mt-4">
            <div className="w-max h-max flex flex-col items-center">
              <span className="w-[40px] h-[40px] rounded-full bg-orange-500 text-center text-white line-40">
                1
              </span>
              <span className="w-[2px] h-[20px] bg-gray-400"></span>
              <span className="w-[40px] h-[40px] rounded-full bg-orange-500 text-center text-white line-40">
                2
              </span>
              <span className="w-[2px] h-[20px] bg-gray-400"></span>
              <span className="w-[40px] h-[40px] rounded-full bg-orange-500 text-center text-white line-40">
                3
              </span>
              <span className="w-[2px] h-[20px] bg-gray-400"></span>
              <span className="w-[40px] h-[40px] rounded-full bg-orange-500 text-center text-white line-40">
                4
              </span>
            </div>
            <div className="w-full h-max flex flex-col items-center gap-[20px]">
              <div className="w-full h-[40px] ">
                <h1 className="font-semibold text-[1.1rem]">Contact Us</h1>
                <p className="text-[.7rem] lg:text-[.8rem] -mt-1 font-semibold text-gray-400">
                  Contact us for your needs
                </p>
              </div>
              <div className="w-full h-[40px] ">
                <h1 className="font-semibold text-[1.1rem]">Consult</h1>
                <p className="text-[.7rem] lg:text-[.8rem] -mt-1 font-semibold text-gray-400">
                  Available to answer your question
                </p>
              </div>
              <div className="w-full h-[40px] ">
                <h1 className="font-semibold text-[1.1rem]">Place Order</h1>
                <p className="text-[.7rem] lg:text-[.8rem] -mt-1 font-semibold text-gray-400">
                  Pay down payment after approval
                </p>
              </div>
              <div className="w-full h-[40px] ">
                <h1 className="font-semibold text-[1.1rem]">Payment</h1>
                <p className="text-[.7rem] lg:text-[.8rem] -mt-1 font-semibold text-gray-400">
                  Pay the remainder when the project is completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
