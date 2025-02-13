import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation(); // Get the current location

  const isActive = (path) => {
    return location.pathname === path
      ? "text-white font-medium"
      : "text-[#B3B3B3]";
  };
  return (
    <div className="fixed right-0 left-0 z-10 mx-auto bg-[rgb(5,37,44)] bg-opacity-40 backdrop-blur-[2px] font-main flex justify-between w-[320px] md:w-full max-w-[1200px] py-3 px-4 mt-6 items-center rounded-3xl border border-[#197686]">
      <div className="flex gap-2 justify-center">
        <span className="bg-[#052f35] flex py-[6px] px-2 justify-center items-center gap-[10px] rounded-xl border-[#0e464f]">
          <img src="/ticket.svg" alt="" />
        </span>
        <img src="/ticz.svg" alt="" />
      </div>
      <ul className="font-main hidden md:flex gap-4">
        <li className={isActive("/")}>
          <Link to="/">Event</Link>
        </li>
        <li className="text-[#B3B3B3]">My Tickets</li>
        <li className={isActive("/about")}>
          <Link to="/about">About Project</Link>
        </li>
      </ul>
      <button className="bg-white flex gap-2 px-6 py-4 items-center justify-center rounded-xl border border-[rgb(213,234,0)] border-opacity-10">
        MY TICKETS <img src="/right-arrow.svg" alt="" />
      </button>
    </div>
  );
};

export default Header;
