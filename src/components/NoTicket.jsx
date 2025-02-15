import { Link } from "react-router";

const NoTicket = () => {
  return (
    <div className="text-center flex flex-col items-center mt-8">
      {/* <img src="/no-ticket.svg" alt="No Tickets" className="w-40 mb-4" /> */}
      <h2 className="text-lg font-semibold text-gray-300">
        No Tickets Available
      </h2>
      <p className="text-gray-500">You haven’t booked any tickets yet.</p>
      <Link
        to="/"
        className="mt-4 bg-[#24a0b5] text-white px-4 py-2 rounded-lg border border-[#24a0b5] hover:bg-transparent hover:text-[#24a0b5] transition duration-300 hover:ease-in-out"
      >
        Book a Ticket
      </Link>
    </div>
  );
};

export default NoTicket;
