import { useNavigate } from "react-router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import StepThree from "../components/TicketReady/StepThree";

const TicketReady = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [ticketType, setTicketType] = useState("Free");
  const [numTickets, setNumTickets] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedTicketType = localStorage.getItem("ticketType");
    const savedNumTickets = localStorage.getItem("numTickets");
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedRequest = localStorage.getItem("specialRequest");
    const savedProfilePictureUrl = localStorage.getItem("profilePictureUrl");

    if (savedName) {
      setName(savedName);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedRequest) {
      setSpecialRequest(savedRequest);
    }

    if (savedTicketType) {
      setTicketType(savedTicketType);
    }

    if (savedNumTickets) {
      setNumTickets(savedNumTickets);
    }
    if (savedProfilePictureUrl) {
      setProfilePictureUrl(savedProfilePictureUrl);
    }
  }, []);

  const handleDownloadClick = () => {
    const ticketElement = document.getElementById("ticket");
    html2canvas(ticketElement, { backgroundColor: null }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "ticket.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  const handleNewTicket = () => {
    localStorage.clear(); // Clear all stored values
    navigate("/", { replace: true }); // Navigate to home
    window.location.reload();
  };

  return (
    <div className="relative outline-none font-main mx-5 text-sm md:text-base flex justify-center min-h-screen max-w-[1440px] md:mx-auto md:w-full">
      <Header />
      <div className="bg-[#041e23] text-white flex flex-col justify- items-center gap-8 max-w-[700px] w-full py-8 px-6 md:p-12 mb-10 md:mb-36 mt-36 rounded-[24px] border border-[#0e464f]">
        <StepThree />
        <section
          id="ticket"
          className="p-6 w-[300px] h-[600px] flex flex-col justify-between items-center bg-[url('/src/assets/bg.png')]"
        >
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
            <div
              style={{ backgroundImage: `url(${profilePictureUrl})` }}
              className={`w-[140px] h-[140px] rounded-xl border-4 border-[#24A0B580] bg-center bg-cover`}
            ></div>
            <div className="w-full h-fit p-1 text-[10px] font-step rounded-lg border border-[#133d44] bg-[#08343c]">
              <div className="grid grid-cols-2 justify-between border-b border-[#12464E]">
                <p className="flex flex-col justify-center gap-1 p-1">
                  <span className="leading-[15px] opacity-[0.33]">
                    Enter your name
                  </span>{" "}
                  <span className="text-xs text-opacity-100 font-bold leading-[18px]">
                    {name}
                  </span>
                </p>
                <p className="pl-2 border-l border-[#12464e] flex flex-col justify-center gap-1 p-1">
                  <span className="leading-[15px] opacity-[0.33]">
                    Enter your email *
                  </span>{" "}
                  <span className="text-xs text-opacity-100 font-bold leading-[18px] overflow-hidden">
                    {email}
                  </span>
                </p>
              </div>

              <div className="fl grid grid-cols-2 justify-between border-b border-[#12464E]">
                <p className="flex flex-col justify-center gap-1 p-1">
                  <span className="leading-[15px] opacity-[0.33]">
                    Ticket Type
                  </span>{" "}
                  <span className="text-xs text-opacity-100 font-bold leading-[18px]">
                    {ticketType}
                  </span>
                </p>
                <p className="pl-2 border-l border-[#12464e] flex flex-col justify-center gap-1 p-1">
                  <span className="leading-[15px] opacity-[0.33]">
                    Ticket for:
                  </span>{" "}
                  <span className="text-xs text-opacity-100 font-bold leading-[18px]">
                    {numTickets}
                  </span>
                </p>
              </div>
              <div className="col-span-2 p-2 flex flex-col gap-1">
                <p className="opacity-[0.33]">Special Request?</p>
                <p className="text-[10px] leading-[15px]">{specialRequest}</p>
              </div>
            </div>
          </div>

          <div className="w-[236px] h-[68px]">
            <img src="/bar-code.png" alt="" />
          </div>
        </section>

        <section className="flex flex-col-reverse  mt-6 md:flex-row w-full justify-between gap-6 font-main leading-6">
          <button
            onClick={handleNewTicket}
            className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white"
          >
            Book Another Ticket
          </button>
          <button
            onClick={handleDownloadClick}
            className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent"
          >
            Download Ticket
          </button>
        </section>
        {/* </section> */}
      </div>
    </div>
  );
};

export default TicketReady;
