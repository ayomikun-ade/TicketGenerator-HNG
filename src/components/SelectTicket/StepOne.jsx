const StepOne = () => {
  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="text-white flex flex-col md:flex-row md:items-center justify-between">
        <h3 className="text-2xl md:text-[32px] leading-normal">
          Ticket Selection
        </h3>
        <p className="font-step text-neutral-50 leading-6 text-base">
          Step 1/3
        </p>
      </div>
      <div>
        <img src="/progress1.png" alt="" />
      </div>
    </section>
  );
};

export default StepOne;
