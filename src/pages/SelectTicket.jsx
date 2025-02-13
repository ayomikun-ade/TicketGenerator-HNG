import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router";

const SelectTicket = () => {
  const [ticketType, setTicketType] = useState("Free");

  const handleTicketTypeChange = (type) => {
    setTicketType(type);
  };
  return (
    <div className="relative font-main mx-5 text-sm md:text-base flex justify-center min-h-screen max-w-[1440px] md:mx-auto md:w-full">
      <Header />
      <div className="md:bg-[#041e23] bg-[#08252B] text-white flex flex-col -center items-center gap-8 max-w-[700px] w-full p-6 md:p-12 mb-10 md:mb-36 mt-36  rounded-[40px] border border-[#0e464f]">
        <section className="flex flex-col gap-3 w-full">
          <div className="text-white flex flex-col md:flex-row md:items-center justify-between">
            <h3 className="text-2xl md:text-[32px] leading-normal">
              Ticket Selection
            </h3>
            <p className="font-step text-neutral-50 leading-6 text-base">
              Step 1/3
            </p>
          </div>
          <div>
            <img src="/progress1.png" alt="" />
          </div>
        </section>
        <section className="md:bg-[#08252b] flex flex-col justify-center items-start gap-8 md:p-6 rounded-[32px] md:border md:border-[#0e464f]">
          <div className="flex flex-col justify-between text-center text-neutral-50 px-6 py-4 md:p-6 rounded-3xl w-full h-[243px] md:h-[200px] border-b-2 border-x-2 border-[#07373f] backdrop-blur bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,_rgba(36,_160,_181,_0.2)_0%,_rgba(36,_160,_181,_0)_100%)] bg-opacity-10 bg-[#0A0C11]">
            <div className="">
              <h1 className="font-rage mb-2 text-5xl md:text-[62px] leading-10 md:leading-none ">
                Techember Fest &quot;25
              </h1>

              <p className="mb-2 md:px-24 font-step leading-normal text-wrap">
                Join us for an unforgettable experience at [Event Name]! Secure
                your spot now.
              </p>
            </div>
            <p className="flex flex-col md:flex-row md:gap-4 font-step justify-center">
              📍[Event Location] <span className="hidden md:flex">||</span>{" "}
              <span>March 15, 2025 | 7:00 PM</span>
            </p>
          </div>
          <hr className="bg-[#08373f] h-1 w-full border-none" />
          <div className="w-full">
            <h3 className="font-step text-neutral-50 font-normal mb-2">
              Select Ticket Type:
            </h3>
            <section className="grid grid-cols-1 w-full md:grid-cols-3 p-4 gap-4 flex-wrap rounded-3xl border-[#07373f] bg-[#052228]">
              <button
                className={`p-3 rounded-xl font-step text-left border-[1px] border-[#197686] hover:bg-[#2C545B] ${
                  ticketType === "Free" ? "bg-[#12464e]" : "bg-transparent"
                }`}
                onClick={() => handleTicketTypeChange("Free")}
              >
                <p className="font-semibold text-[24px] mb-3 leading-[26.4px]">
                  Free
                </p>
                <p className="text-neutral-50 text-[16px] leading-6 uppercase">
                  REGULAR ACCESS
                </p>
                <p className="text-[#d9d9d9] leading-5">20/52</p>
              </button>
              <button
                className={`p-3 rounded-xl font-step text-left border-[1px] border-[#197686] hover:bg-[#2C545B] ${
                  ticketType === "VIP" ? "bg-[#12464e]" : "bg-transparent"
                }`}
                onClick={() => handleTicketTypeChange("VIP")}
              >
                <p className="font-semibold text-[24px] mb-3 leading-[26.4px]">
                  $150
                </p>
                <p className="text-neutral-50 text-[16px] leading-6 uppercase">
                  VIP ACCESS
                </p>
                <p className="text-[#d9d9d9] leading-5">20/52</p>
              </button>
              <button
                className={`p-3 rounded-xl font-step text-left border-[1px] border-[#197686] hover:bg-[#2C545B] ${
                  ticketType === "VVIP" ? "bg-[#12464e]" : "bg-transparent"
                }`}
                onClick={() => handleTicketTypeChange("VVIP")}
              >
                <p className="font-semibold font-step text-[24px] mb-3 leading-[26.4px]">
                  $150
                </p>
                <p className="text-neutral-50 text-[16px] leading-6 uppercase">
                  VVIP ACCESS
                </p>
                <p className="text-[#d9d9d9] leading-5">20/52</p>
              </button>
            </section>
          </div>

          <div className="w-full">
            <p className="mb-2 text-neutral-50 leading-6 font-step">
              Number of Tickets
            </p>
            <select
              name="ticket-no"
              className="p-3 w-full rounded-xl border-[1px] md:bg-[#041e23] bg-[#08252B] appearance-none border-[#07373f] outline-none"
            >
              <option value="1" className="bg-transparent">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-6 font-main leading-6">
            <button className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white">
              Cancel
            </button>
            <Link
              to="/details"
              className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent"
            >
              Next
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelectTicket;
