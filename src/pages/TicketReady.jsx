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
        <section className="p-8 w-[300px] h-[600px]"></section>
        {/* <section className="md:bg-[#08252b] w-full flex flex-col justify-center items-start gap-8 md:p-6 rounded-[32px] md:border md:border-[#0e464f]"> */}
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
