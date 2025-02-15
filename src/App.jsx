import { BrowserRouter, Route, Routes } from "react-router";
import SelectTicket from "./pages/SelectTicket";
import AttendeeDetails from "./pages/AttendeeDetails";
import TicketReady from "./pages/TicketReady";
import About from "./pages/About";
import MyTickets from "./pages/MyTickets";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-[#02191D] bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,_rgba(36,_160,_181,_0.2)_0%,_rgba(36,_160,_181,_0)_100%)] bg-fixed">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<SelectTicket />} />
          <Route path="/details" element={<AttendeeDetails />} />
          <Route path="/ticket" element={<TicketReady />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-tickets" element={<MyTickets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
