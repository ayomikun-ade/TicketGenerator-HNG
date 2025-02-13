const StepThree = () => {
  return (
    <>
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
    </>
  );
};

export default StepThree;
