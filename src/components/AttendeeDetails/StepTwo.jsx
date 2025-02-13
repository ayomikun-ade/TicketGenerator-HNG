const StepTwo = () => {
  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="text-white flex items-center justify-between">
        <h3 className="text-2xl md:text-[32px] leading-normal">
          Attendee Details
        </h3>
        <p className="font-step text-neutral-50 leading-6 text-base">
          Step 2/3
        </p>
      </div>
      <div>
        <img
          src="/progress2.png"
          alt="progress bar"
          className="hidden md:block"
        />
        <img
          src="/progress2-mobile.png"
          alt="progress bar"
          className="md:hidden"
        />
      </div>
    </section>
  );
};

export default StepTwo;
