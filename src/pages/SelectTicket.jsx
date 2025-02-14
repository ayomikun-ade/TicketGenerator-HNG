import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import StepOne from "../components/SelectTicket/StepOne";
import EventDetails from "../components/SelectTicket/EventDetails";

const SelectTicket = () => {
  const [ticketType, setTicketType] = useState("Free");
  const [numTickets, setNumTickets] = useState(1);

  const navigate = useNavigate();

  const handleTicketTypeChange = (type) => {
    setTicketType(type);
  };

  const handleNextClick = () => {
    localStorage.setItem("ticketType", ticketType);
    localStorage.setItem("numTickets", numTickets);
    console.log(ticketType, numTickets);
    navigate("/details");
  };

  return (
    <div className="relative font-main mx-5 text-sm md:text-base flex justify-center min-h-screen max-w-[1440px] md:mx-auto md:w-full">
      <Header />
      <div className="md:bg-[#041e23] bg-[#08252B] animate-fadeIn text-white flex flex-col -center items-center gap-8 max-w-[700px] w-full p-6 md:p-12 mb-10 md:mb-36 mt-36  rounded-[40px] border border-[#0e464f]">
        <StepOne />
        <section className="md:bg-[#08252b] flex flex-col justify-center items-start gap-8 md:p-6 rounded-[32px] md:border md:border-[#0e464f]">
          <EventDetails />
          <hr className="bg-[#08373f] h-1 w-full border-none" />
          <div className="w-full">
            <h3 className="font-step text-neutral-50 font-normal mb-2">
              Select Ticket Type:
            </h3>
            <section className="grid grid-cols-1 w-full md:grid-cols-3 p-4 gap-4 flex-wrap rounded-3xl border-[#07373f] bg-[#052228]">
              <button
                className={`p-3 rounded-xl font-step text-left border-2 border-[#197686] hover:bg-[#2C545B] transition duration-300 hover:ease-in-out ${
                  ticketType === "Free"
                    ? "bg-[#12464e] border-1"
                    : "bg-transparent"
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
                className={`p-3 rounded-xl font-step text-left border-2 border-[#197686] hover:bg-[#2C545B] transition duration-300 hover:ease-in-out ${
                  ticketType === "VIP"
                    ? "bg-[#12464e] border-1"
                    : "bg-transparent"
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
                className={`p-3 rounded-xl font-step text-left border-2 border-[#197686] hover:bg-[#2C545B] transition duration-300 hover:ease-in-out ${
                  ticketType === "VVIP"
                    ? "bg-[#12464e] border-1"
                    : "bg-transparent"
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
            <div className="relative font-step text-base">
              <select
                name="ticket-no"
                value={numTickets}
                onChange={(e) => setNumTickets(e.target.value)}
                className="custom-arrow p-3 w-full rounded-xl border-[1px] md:bg-[#041e23] bg-[#08252B] appearance-none border-[#07373f] outline-none"
              >
                <option value="1" className="bg-transparent">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.293 8.29309L12 12.5861L7.70697 8.29309L6.29297 9.70709L12 15.4141L17.707 9.70709L16.293 8.29309Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-6 font-main leading-6">
            <button className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white transition duration-300 hover:ease-in-out">
              Cancel
            </button>
            <button
              onClick={handleNextClick}
              className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent transition duration-300 hover:ease-in-out"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelectTicket;
