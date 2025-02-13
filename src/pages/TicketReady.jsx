import { Link } from "react-router";
import Header from "../components/Header";

const TicketReady = () => {
  return (
    <div className="relative outline-none font-main mx-5 text-sm md:text-base flex justify-center min-h-screen max-w-[1440px] md:mx-auto md:w-full">
      <Header />
      <div className="bg-[#041e23] text-white flex flex-col justify- items-center gap-8 max-w-[700px] w-full py-8 px-6 md:p-12 mb-10 md:mb-36 mt-36 rounded-[24px] border border-[#0e464f]">
        <section className="flex flex-col gap-3 w-full">
          <div className="text-white flex items-center justify-between">
            <h3 className="text-2xl md:text-[32px] leading-normal">Ready</h3>
            <p className="font-step text-neutral-50 leading-6 text-base">
              Step 3/3
            </p>
          </div>
          <hr className="bg-[#24a0b5] h-1 w-full rounded-md border-none" />
        </section>
        <section className="flex flex-col gap-3 md:gap-4">
          <h1 className="font-booked text-2xl md:text-[32px] leading-normal text-center">
            Your Ticket is Booked!
          </h1>
          <p className="font-step text-center">
            Check your email for a copy or you can{" "}
            <span className="font-bold">download</span>
          </p>
        </section>
        <section className="p-6 w-[300px] h-[600px] flex flex-col justify-between items-center bg-[url('/src/assets/bg.png')]">
          <div className="w-[260px] h-[446px] p-[14px] flex flex-col items-center gap-5 rounded-2xl border border-[#24a0b5] bg-[#031E211A] backdrop-blur-[2px] ">
            <div className="text-center w-[175px]">
              <h2 className="font-rage text-[34px] leading-[34px] ">
                Techember &quot;25
              </h2>
              <div className="p-1 flex flex-col text-[10px] leading-[15px] font-step justify-center items-center gap-1">
                <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                <p>📅 March 15, 2025 | 7:00 PM</p>
              </div>
            </div>
            <div className="w-[140px] h-[140px] rounded-xl border-4 border-[#24A0B580] bg-[url('/src/assets/profile-image.jpg')] bg-center bg-cover"></div>
            <div className="w-full h-fit p-1 text-[10px] font-step rounded-lg border border-[#133d44] bg-[#08343c]">
              <div className="grid grid-cols-2 justify-between border-b border-[#12464E]">
                <p className="flex flex-col justify-center gap-1 p-1">
                  <span className="leading-[15px] opacity-[0.33]">
                    Enter your name
                  </span>{" "}
                  <span className="text-xs text-opacity-100 font-bold leading-[18px]">
                    Avi Chukwu
                  </span>
                </p>
                <p className="pl-2 border-l border-[#12464e] flex flex-col justify-center gap-1 p-1">
                  <span className="leading-[15px] opacity-[0.33]">
                    Enter your email *
                  </span>{" "}
                  <span className="text-xs text-opacity-100 font-bold leading-[18px]">
                    user@email.com
                  </span>
                </p>
              </div>

              <div className="fl grid grid-cols-2 justify-between border-b border-[#12464E]">
                <p className="flex flex-col justify-center gap-1 p-1">
                  <span className="leading-[15px] opacity-[0.33]">
                    Ticket Type
                  </span>{" "}
                  <span className="text-xs text-opacity-100 font-bold leading-[18px]">
                    VIP
                  </span>
                </p>
                <p className="pl-2 border-l border-[#12464e] flex flex-col justify-center gap-1 p-1">
                  <span className="leading-[15px] opacity-[0.33]">
                    Ticket for:
                  </span>{" "}
                  <span className="text-xs text-opacity-100 font-bold leading-[18px]">
                    1
                  </span>
                </p>
              </div>
              <div className="col-span-2 p-2 flex flex-col gap-1">
                <p className="opacity-[0.33]">Special Request?</p>
                <p className="text-[10px] leading-[15px]">
                  Nil ? Or the users sad story they write in there gets this
                  whole space, Max of three rows
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src="/bar-code.png" alt="" />
          </div>
        </section>

        <section className="flex flex-col-reverse  mt-6 md:flex-row w-full justify-between gap-6 font-main leading-6">
          <Link
            to="/"
            className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white"
          >
            Book Another Ticket
          </Link>
          <button className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent">
            Download Ticket
          </button>
        </section>
        {/* </section> */}
      </div>
    </div>
  );
};

export default TicketReady;
