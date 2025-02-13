import { Link } from "react-router";
import Header from "../components/Header";

const AttendeeDetails = () => {
  return (
    <div className="relative outline-none font-main mx-5 text-sm md:text-base flex justify-center min-h-screen max-w-[1440px] md:mx-auto md:w-full">
      <Header />
      <div className="md:bg-[#041e23] bg-[#08252B] text-white flex flex-col -center items-center gap-8 max-w-[700px] w-full p-6 md:p-12 mb-10 md:mb-36 mt-36  rounded-[40px] border-[#0e464f]">
        <section className="flex flex-col gap-3 w-full">
          <div className="text-white flex flex-col md:flex-row md:items-center justify-between">
            <h3 className="text-2xl md:text-[32px] leading-normal">
              Attendee Details
            </h3>
            <p className="font-step text-neutral-50 leading-6 text-base">
              Step 2/3
            </p>
          </div>
          <div>
            <img src="/progress2.png" alt="progress bar" />
          </div>
        </section>
        <section className="md:bg-[#08252b] flex flex-col justify-center items-start gap-8 md:p-6 rounded-[32px] md:border-[#0e464f]">
          <div className="flex flex-col justify-between gap-8 text-neutral-50 px-6 py-4 md:p-6 md:pb-12 rounded-3xl w-[556px] border-[1px] border-[#07373f]">
            <p className="font-step leading-6 text-neutral-50">
              Upload Profile Photo
            </p>
            <div>
              <div className="relative h-[200px] w-full bg-black bg-opacity-20">
                <button className="bg-[#0e464f] absolute right-0 left-0 font-main w-60 h-60 p-6 flex flex-col gap-4 mx-auto -my-6 justify-center items-center rounded-[32px] border-[3px] border-[rgb(36, 160, 181)] border-opacity-50">
                  <img src="/cloud-download.svg" alt="" />
                  Drag & drop or click to upload
                </button>
              </div>
            </div>
          </div>
          <hr className="bg-[#08373f] h-1 w-full border-none" />
          <form className="w-full font-step flex flex-col gap-8">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-step text-neutral-50 font-normal mb-2"
              >
                Enter your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="appearance-none outline-none h-12 p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#26899c] caret-[#26899c]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-step text-neutral-50 font-normal mb-2"
              >
                Enter your email*
              </label>
              <p className="has-[:focus]:border-[#26899c] outline-none flex items-center gap-2 h-12 p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#26899c]">
                <img src="/envelope.svg" alt="" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  className="appearance-none w-full outline-none bg-transparent focus:caret-[#26899c]"
                />
              </p>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="special"
                className="font-step text-neutral-50 font-normal mb-2"
              >
                Special request?
              </label>
              <textarea
                name="special"
                id="special"
                placeholder="Textarea"
                rows={4}
                className="outline-none h-[127px] p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#26899c] caret-[#26899c]"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between gap-6 font-main leading-6">
              <Link
                to="/"
                className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white"
              >
                Cancel
              </Link>
              <button className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent">
                Get My Free Ticket
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AttendeeDetails;
