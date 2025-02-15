import { useEffect, useState } from "react";
import { Link } from "react-router";
import NoTicket from "../components/NoTicket";
import { toast, ToastContainer } from "react-toastify";

const MyTickets = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketType, setTicketType] = useState("Free");
  const [numTickets, setNumTickets] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  // Load ticket details from localStorage
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setTicketType(localStorage.getItem("ticketType"));
    setNumTickets(localStorage.getItem("numTickets"));
    setProfilePictureUrl(localStorage.getItem("profilePictureUrl"));
  }, []);

  const handleClearAll = () => {
    toast.info(
      <div>
        <p>Are you sure you want to delete all tickets?</p>
        <button
          onClick={confirmDelete}
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md mt-2"
        >
          Confirm
        </button>
      </div>,
      { autoClose: false, theme: "dark", role: "status" }
    );
  };
  const confirmDelete = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <ToastContainer />
      <div className="relative font-main mx-5 text-sm md:text-base flex justify-center min-h-screen max-w-[1440px] md:mx-auto md:w-full">
        {/* <Header /> */}
        <div className="md:bg-[#041e23] bg-[#08252B] animate-fadeIn text-white flex flex-col items-center gap-8 max-w-[700px] w-full p-6 md:p-12 mb-10 mt-36  rounded-[40px] border border-[#0e464f]">
          <section className="flex justify-between items-center w-full">
            <h1 className="text-2xl md:text-4xl font-bold">My Tickets 🎟️</h1>
            <button
              onClick={handleClearAll}
              className="border border-red-600 text-red-600 px-4 py-2 rounded-lg font-semibold hover:border-red-800 hover:text-red-800 transition duration-300 hover:ease-in-out"
            >
              Clear All
            </button>
          </section>
          {name ? (
            <section className="w-full flex flex-col items-center">
              <div
                id="ticket"
                className="bg-[#052228] hover:bg-[#0b292e] hover:cursor-pointer transition duration-500 hover:ease-in-out p-6 w-full mb-8 rounded-xl shadow-lg border border-[#24a0b5] flex flex-col md:flex-row gap-2 justify-between items-center"
              >
                {profilePictureUrl && (
                  <img
                    src={profilePictureUrl}
                    alt="Profile"
                    className="w-24 h-24 rounded-xl border-2 border-[#24a0b5] mb-4 md:mb-0"
                  />
                )}
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-main font-bold">{name}</h2>
                  <p className="text-gray-300 font-step">{email}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">
                    🎟️ {ticketType} Ticket
                  </p>
                  <p className="text-sm font-step text-gray-400">
                    🎫 {numTickets} Ticket(s)
                  </p>
                </div>
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                  className="text-lg text-center text-red-600 hover:text-red-500 font-semibold"
                >
                  Delete
                </button>
              </div>
              {/* <div className="mt-6 flex flex-col gap-3 w-[350px]"> */}
              <Link
                to="/"
                className="text-white justify-self-end bg-[#24a0b5] p-3 text-center rounded-lg border border-[#24a0b5] hover:bg-transparent hover:text-[#24a0b5] transition duration-300 hover:ease-in-out"
              >
                Back to Home
              </Link>
              {/* </div> */}
            </section>
          ) : (
            <NoTicket />
          )}
        </div>
      </div>
    </>
  );
};

export default MyTickets;
