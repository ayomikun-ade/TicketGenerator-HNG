# Ticz - Conference Ticket Generator  🎟️

## Overview

A simple and user-friendly event ticketing system that allows users to **select, book, and manage event tickets**. Users can upload a profile picture, generate a ticket, and download it as an image.

## Live Demo

[//]: # "Add a link to a live demo here if you have one hosted"

[**Ticket Generator**](https://ticket-generator-lemon.vercel.app/) - _Live Site!_

## Features

1.  **Ticket Selection:** - Users can choose from Free, VIP, and VVIP tickets.
2.  **Profile Upload** – Upload a profile image for a personalized ticket
3.  **My Ticket Page** – View booked tickets and download them as images.
4.  **Download Ticket** – Saves the ticket as an image using `html-to-image`.
5.  **Mobile-Friendly** – Fully responsive design.  

## Technologies Used

- **Frontend:**

  - [React](https://react.dev/) - JavaScript library for building user interfaces
  - [Tailwind CSS](https://tailwindcss.com/) - CSS framework for styling
  - [React Router DOM](https://reactrouter.com/en/main) - For handling navigation between different sections.
  - [Zod](https://zod.dev/) - For schema validation.
  - [react-toastify](https://fkhadra.github.io/react-toastify/): For toast notifications.
  - [html-to-image](https://html2canvas.hertzen.com/): For generating images of the ticket

- **Image Hosting:**

  - [Cloudinary](https://cloudinary.com/) - Cloud-based image management (optional, but recommended for handling avatar uploads).

- **Local Storage:**
  - Used for persisting data.

## How to Build This 🚀

This UI can be implemented using:

- **Frontend (React):**

  - **Pages Breakdown:**

    - `SelectTicket.tsx`: Allows users to select the ticket type and number of tickets.
    - `AttendeeDetails.tsx`: Captures user details (Name, Email, Profile Picture, Special Request).
    - `TicketReady.tsx`: Shows the final ticket preview with a download option.

  - **State Management:** This project uses simple `useState` for demonstration.
  - **File Handling:** This project uses Cloudinary for image handling.

## Installation

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)


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
    ```

4.  **Run the application:**

    ```
    npm run dev
    ```

    This will start the development server, and you can view the application in your browser at `http://localhost:5173`.

## How It Works 🧑‍💻
1. User selects a ticket type (Free, VIP, VVIP).
2. Uploads a profile picture (sent to Cloudinary).
3. Fills in attendee details (name, email, special request).
4. Ticket is generated and displayed on the My Ticket page.
5. Users can:
   - Download the ticket as an image
   - Delete individual tickets
   - Delete all tickets

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

If you have any questions or need help getting started, feel free to contact me or open an issue.  You can reach me by:
 - [Email](mailto:ayoadeosun10@gmail.com)
 - [LinkedIn](https://linkedin.com/in/ayomikun-adeosun)

**Ciao!**

