const About = () => {
  return (
    <div className="relative outline-none font-step mx-5 text-sm md:text-base flex justify-center min-h-screen max-w-[1440px] md:mx-auto md:w-full">
      {/* <Header /> */}
      <div className="bg-[#041e23] text-white flex flex-col animate-fadeIn items-center gap-8 max-w-[700px] w-full py-8 px-6 md:p-12 mb-10 md:mb-36 mt-36 rounded-[24px] border border-[#0e464f]">
        <section>
          <article className="">
            <h1 className="text-4xl font-rage mb-4">
              Event Ticket Booking UI – Open Source Practice Project 🎟️
            </h1>

            <section className="mb-6">
              <h2 className="text-2xl font-main font-semibold mb-2">
                Overview
              </h2>
              <p className="text-neutral-100 leading-relaxed">
                This is a beginner-friendly yet practical Event Ticket Booking
                UI designed for developers to clone, explore, and build upon.
                The design focuses on a seamless, login-free ticket reservation
                flow, allowing users to book event tickets quickly and
                efficiently.
              </p>
              <p className="text-neutral-100 leading-relaxed mt-2">
                The project consists of a three-step ticket booking flow, and
                developers can extend it further by integrating payment
                solutions, user authentication (optional), and ticket validation
                systems.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-main font-semibold mb-2">
                Flow & Features
              </h2>
              <ol className="list-decimal pl-6">
                <li className="mb-2">
                  <p className="font-semibold">1️⃣ Ticket Selection</p>
                  <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                    <li className="mb-1">
                      Users can browse available tickets (Free & Paid).
                    </li>
                    <li className="mb-1">
                      Ticket options are displayed in a list or card view.
                    </li>
                    <li className="mb-1">
                      For Free Tickets → Clicking “Get Free Ticket” proceeds to
                      attendee details.
                    </li>
                    <li className="mb-1">
                      For Paid Tickets → Clicking “Purchase Ticket” would
                      ideally open a payment modal.
                    </li>
                  </ul>
                </li>

                <li className="mb-2">
                  <p className="font-semibold">2️⃣ Attendee Details Form</p>
                  <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                    <li className="mb-1">
                      Users input their Name, Email, and optional Phone Number.
                    </li>
                    <li className="mb-1">
                      Profile picture upload option with preview functionality.
                    </li>
                    <li className="mb-1">
                      Ticket summary is visible to ensure users review their
                      details before submission.
                    </li>
                  </ul>
                </li>

                <li className="mb-2">
                  <p className="font-semibold">3️⃣ Payment or Success Page</p>
                  <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                    <li className="mb-1">
                      If the ticket is free, the user is taken directly to the
                      Ticket Confirmation Page.
                    </li>
                    <li className="mb-1">
                      If the ticket is paid, developers can integrate Stripe,
                      Paystack, or Flutterwave to process payments before
                      showing the confirmation page.
                    </li>
                    <li className="mb-1">
                      Upon successful booking, users should receive:
                    </li>
                    <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                      <li className="mb-1">
                        A visual ticket preview with a unique QR Code.
                      </li>
                      <li className="mb-1">
                        An option to download the ticket as PDF or save it to
                        their device.
                      </li>
                      <li className="mb-1">
                        An email confirmation containing ticket details.
                      </li>
                    </ul>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-main font-semibold mb-2">
                How to Build This 🚀
              </h2>
              <p className="text-neutral-100 leading-relaxed">
                This UI can be implemented using:
              </p>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  📌 Frontend (Next.js or React)
                </h3>
                <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                  <li className="mb-1">Component Breakdown:</li>
                  <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                    <li className="mb-1">
                      TicketCard.tsx → Displays ticket details
                    </li>
                    <li className="mb-1">
                      AttendeeForm.tsx → Captures user details
                    </li>
                    <li className="mb-1">
                      PaymentModal.tsx → Handles payment processing
                    </li>
                    <li className="mb-1">
                      SuccessScreen.tsx → Shows the final ticket preview
                    </li>
                  </ul>
                  <li className="mb-1">
                    State Management: React’s Context API, Zustand, or Redux (if
                    needed).
                  </li>
                  <li className="mb-1">
                    File Handling: Users should be able to upload images
                    (profile picture for ticket) using Firebase Storage,
                    Cloudinary, or local preview with URL.createObjectURL().
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-main font-semibold mb-1">
                  📌 Backend (Optional)
                </h3>
                <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                  <li className="mb-1">
                    If persistence is required, a backend can be built using:
                  </li>
                  <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                    <li className="mb-1">
                      Node.js & Express or Firebase Functions
                    </li>
                    <li className="mb-1">
                      Database: MongoDB, PostgreSQL, or Firebase Firestore to
                      store ticket records
                    </li>
                  </ul>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-main font-semibold mb-1">
                  📌 Payment Integration
                </h3>
                <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                  <li className="mb-1">
                    For paid events, developers should integrate:
                  </li>
                  <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                    <li className="mb-1">
                      Stripe Checkout (for international transactions)
                    </li>
                    <li className="mb-1">
                      Paystack or Flutterwave (for African users)
                    </li>
                  </ul>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-main font-semibold mb-2">
                What You’ll Learn 🧑‍💻
              </h2>
              <ul className="list-disc pl-6 text-neutral-100 leading-relaxed">
                <li className="mb-1">
                  File handling & validation (profile picture uploads).
                </li>
                <li className="mb-1">
                  Dynamic UI updates based on ticket selection.
                </li>
                <li className="mb-1">
                  Persisting bookings using local state or a backend.
                </li>
                <li className="mb-1">
                  Integrating payment gateways for ticket purchases.
                </li>
                <li className="mb-1">
                  Generating & validating QR Codes for event check-in
                  (Advanced).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-main font-semibold mb-2">
                Need Help? Reach Out! 💬
              </h2>
              <p className="text-neutral-100 leading-relaxed">
                Contact me if you need help.
              </p>
            </section>
          </article>
        </section>
        <section className="flex flex-col-reverse mt-6 md:flex-row w-full py-4 px-12 border border-[#24a0b5] rounded-2xl justify-between gap-6 font-main leading-6">
          <button className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white transition duration-300 hover:ease-in-out">
            <a
              href="https://www.figma.com/community/file/1470800949188681164"
              target="_blank"
            >
              Design File
            </a>
          </button>
          <button className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent transition duration-300 hover:ease-in-out">
            <a
              href="https://github.com/ayomikun-ade/TicketGenerator-HNG"
              target="_blank"
            >
              GitHub Code
            </a>
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
