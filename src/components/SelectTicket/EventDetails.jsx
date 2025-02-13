const EventDetails = () => {
  return (
    <div>
      <div className="flex flex-col justify-between text-center text-neutral-50 px-6 py-4 md:p-6 rounded-3xl w-full h-[243px] md:h-[200px] border-b-2 border-x-2 border-[#07373f] backdrop-blur bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,_rgba(36,_160,_181,_0.2)_0%,_rgba(36,_160,_181,_0)_100%)] bg-opacity-10 bg-[#0A0C11]">
        <div className="">
          <h1 className="font-rage mb-2 text-5xl md:text-[62px] leading-10 md:leading-none ">
            Techember Fest &quot;25
          </h1>

          <p className="mb-2 md:px-24 font-step leading-normal text-wrap">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
        </div>
        <p className="flex flex-col md:flex-row md:gap-4 font-step justify-center">
          📍[Event Location] <span className="hidden md:flex">||</span>{" "}
          <span>March 15, 2025 | 7:00 PM</span>
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
