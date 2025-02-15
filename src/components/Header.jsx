import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation(); // Get the current location

  const isActive = (path) => {
    return location.pathname === path
      ? "text-white font-medium"
      : "text-[#B3B3B3] hover:text-neutral-200";
  };
  return (
    <div className="fixed right-0 left-0 z-10 animate-headerIn mx-auto bg-[rgb(5,37,44)] bg-opacity-40 backdrop-blur-[2px] font-main flex justify-between w-[320px] md:w-full max-w-[1200px] py-3 px-4 mt-6 items-center rounded-3xl border border-[#197686]">
      <div className="flex gap-2 justify-center items-center">
        <span className="bg-[#052f35] flex py-[6px] px-2 justify-center items-center gap-[10px] rounded-xl border border-[#0e464f]">
          <img src="/ticket.svg" alt="" />
        </span>
        <Link to="/">
          <img src="/ticz.svg" alt="" />
        </Link>
      </div>
      <ul className="font-main hidden md:flex gap-4">
        <li className={isActive("/")}>
          <Link to="/">Event</Link>
        </li>
        <li className={isActive("/my-tickets")}>
          <Link to="/my-tickets">My Tickets</Link>
        </li>
        <li className={isActive("/about")}>
          <Link to="/about">About Project</Link>
        </li>
      </ul>
      <Link
        to="/my-tickets"
        className="group bg-white text-[#0A0C11] text-sm md:text-base flex gap-2 px-6 py-4 items-center justify-center rounded-xl border border-[#d5ea00] hover:border-[#d9d9d9] border-opacity-10 hover:bg-[#24a0b5] hover:text-white transition duration-300 hover:ease-in-out"
      >
        MY TICKETS
        <img
          src="/right-arrow.svg"
          className="group-hover:-rotate-45 transition duration-300 hover:ease-in-out group-hover:fill-white"
          alt="right-arrow"
        />
      </Link>
    </div>
  );
};

export default Header;
