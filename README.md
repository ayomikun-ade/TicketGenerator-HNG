# Event Ticket Booking UI – Open Source Practice Project 🎟️

## Overview

This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless ticket reservation flow, allowing users to book event tickets quickly and efficiently. No login is required in this base project, so users can book event tickets quickly.

The project consists of a three-step ticket booking flow. It is designed to be a practice project, so developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.

## Live Demo

[//]: # "Add a link to a live demo here if you have one hosted"

[**Ticket Generator**](https://ticket-generator-lemon.vercel.app/) - _Live Site!_

## Flow & Features

1.  **Ticket Selection:**

    - Users can browse available tickets (Free & Paid).
    - Ticket options are displayed in a list or card view.
    - For Free Tickets: Clicking “Get Free Ticket” proceeds to attendee details.
    - For Paid Tickets: Clicking “Purchase Ticket” would ideally open a payment modal (implementation left to the developer).

2.  **Attendee Details Form:**

    - Users input their Name, Email, and a required Profile Picture.
    - An optional "Special Request" field is included for additional information.
    - Profile picture upload option with preview functionality (using Cloudinary).
    - Ticket summary is visible to ensure users review their details before submission.

3.  **Ticket Confirmation Page:**

    - If the ticket is free, the user is taken directly to the Ticket Confirmation Page.
    - If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.
    - Upon successful booking, users receive:
      - A visual ticket preview with a unique QR Code.
      - An option to download the ticket as PNG.
      - The ticket details on the screen.

## Technologies Used

- **Frontend:**

  - [React](https://react.dev/) - JavaScript library for building user interfaces
  - [Tailwind CSS](https://tailwindcss.com/) - CSS framework for styling
  - [React Router DOM](https://reactrouter.com/en/main) - For handling navigation between different sections.
  - [Zod](https://zod.dev/) - For schema validation.
  - [react-toastify](https://fkhadra.github.io/react-toastify/): For toast notifications.
  - [html-t0-image](https://html2canvas.hertzen.com/): For generating images of the ticket

- **Image Hosting:**

  - [Cloudinary](https://cloudinary.com/) - Cloud-based image management (optional, but recommended for handling avatar uploads).

- **Local Storage:**
  - Web Storage API for persisting data.

## How to Build This 🚀

This UI can be implemented using:

- **Frontend (Next.js or React):**

  - **Component Breakdown:**

    - `SelectTicket.tsx`: Allows users to select the ticket type and number of tickets.
    - `AttendeeDetails.tsx`: Captures user details (Name, Email, Profile Picture, Special Request).
    - `TicketReady.tsx`: Shows the final ticket preview with a download option.
    - Smaller presentational components (e.g., custom input fields, buttons)

  - **State Management:** React's Context API, Zustand, or Redux (if needed for more complex state management). This project uses simple `useState` for demonstration.
  - **File Handling:** Users can upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL(). _This project uses Cloudinary_.

- **Backend (Optional):** If persistence is required, a backend can be built using:

  - Node.js & Express or Firebase Functions
  - Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records. _This is not included in the base project._

- **Payment Integration:** For paid events, developers should integrate:

  - Stripe Checkout (for international transactions)
  - Paystack or Flutterwave (for African users) - _This is not included in the base project._

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```
    git clone https://github.com/ayomikun-ade/TicketGenerator-HNG.git
    ```

    _Replace `your-username` with your GitHub username._

2.  **Navigate to the project directory:**

    ```
    cd TicketGenerator-HNG
    ```

3.  **Install dependencies:**

    ```
    npm install
    # or
    yarn install
    ```

4.  **Configure Cloudinary (Optional):**

    - If you want to use Cloudinary for avatar uploads, you'll need to:
      - Create a Cloudinary account.
      - Obtain your Cloudinary cloud name and upload preset.
      - Update the `AttendeeDetails.js` component with your Cloudinary credentials.

5.  **Add .env file**

- Create a .env file, to add the important credentials such as keys

6.  **Run the application:**

    ```
    npm start
    # or
    yarn start
    ```

    This will start the development server, and you can view the application in your browser at `http://localhost:5173`.

## What You’ll Learn 🧑‍💻

- Building a multi-step form with React.
- File handling & validation (profile picture uploads).
- Dynamic UI updates based on ticket selection.
- Persisting bookings using local state or a backend.
- Integrating payment gateways for ticket purchases (extension).
- Generating & validating QR Codes for event check-in (Advanced extension).

## Areas for Extension

This project provides a solid foundation, but there's plenty of room for improvement and expansion:

- **Payment Integration:** Integrate a payment gateway (Stripe, PayPal, etc.) to handle paid tickets.
- **User Authentication:** Add user registration and login functionality.
- **Backend Integration:** Connect the frontend to a backend database to store ticket information and user data.
- **QR Code Generation:** Implement QR code generation for tickets and a system for scanning and validating tickets at the event.
- **Email Confirmation:** Send automated email confirmations to users after successful ticket booking.
- **Accessibility Improvements:** Thoroughly test and improve the accessibility of the form and ticket components.
- **More Robust State Management:** Implement Redux, Recoil, or Zustand for state management.
- **Testing:** Add unit and integration tests.

## Contributing

Contributions are welcome! Here's how you can contribute:

1.  **Fork the repository.**
2.  **Create a new branch for your feature or bug fix:**

    ```
    git checkout -b feature/your-feature-name
    # or
    git checkout -b fix/your-bug-fix
    ```

3.  **Make your changes and commit them:**

    ```
    git add .
    git commit -m "Add: your descriptive commit message"
    ```

4.  **Push your branch to your forked repository:**

    ```
    git push origin feature/your-feature-name
    ```

5.  **Create a pull request to the main repository.**

Please adhere to the project's coding style and guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Need Help? Reach Out! 💬

If you have any questions or need help getting started, feel free to contact me or open an issue.

**Ciao!**
