# Ticketrix

## Table of Contents

- [About](#about)
- [Potential Applications](#potential-applications)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Possible Extensions](#possible-extensions)
- [License](#license)

## About

This repository is a full-stack multi-vendor e-ticketing website that allows users to discover and purchase tickets for various events from multiple vendors. It provides a seamless experience for browsing events, viewing details, and making purchases. The backend code is available in my general-purpose backend repository.

### Potential Applications

This repository can serve as a foundation for creating various other types of ticketing and event management websites, such as:

- **Concert Tickets:** List and purchase tickets for concerts and music festivals.
- **Sports Events:** Browse and buy tickets for sports games and tournaments.
- **Theater and Performances:** Find and book tickets for theater productions, plays, and live performances.
- **Conferences and Workshops:** Discover and register for conferences, workshops, and seminars.
- **Movie Screenings:** Search and book tickets for movie screenings and film festivals.

## Features

- **Event Listings:** View detailed information about events, including their title, date, venue, and price.
- **Search Functionality:** Easily search for events by name, date, or category.
- **Responsive Design:** The website is fully responsive, ensuring it works well on both desktop and mobile devices.
- **Interactive UI:** Engaging and interactive user interface built with React and Framer Motion for smooth animations.
- **Notifications:** Real-time notifications using React Toastify for improved user interaction.
- **Vendor Management:** Support for multiple vendors to list and manage their events.
- **User Authentication and Authorization:** Secure user authentication and authorization with jwt.
- **Payment Integration:** Integrated with Paystack for secure payment processing.
- **Cart Functionality:** Users can add tickets to their cart and proceed to checkout.

## Technologies Used

- **Frontend:** React, Next.js, Tailwind CSS, Framer Motion
- **State Management:** React Hooks
- **API Requests:** Axios
- **Form Validation:** Zod
- **Icons:** FontAwesome, React Icons
- **Styling Utilities:** clsx, Tailwind css
- **Authentication:** Jwt
- **Payments:** Paystack

## Getting Started

To get started with Ticketrix, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine using the command:
    ```bash
    git clone https://github.com/AbdulBima/Ticketrix.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd ticketrix
    ```

3. **Install Dependencies:** Install the necessary dependencies by running:
    ```bash
    npm install
    ```

4. **Set Up Environment Variables:** Create a `.env.local` file and add the necessary environment variables as per the `.env.example` file.

5. **Start the Development Server:** Start the development server by running:
    ```bash
    npm run dev
    ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

6. **Build the Project for Production:** Build the project for production by running:
    ```bash
    npm run build
    ```

## Possible Extensions

- **Admin Dashboard:** Create an admin dashboard for managing events, vendors, and users.
- **Vendor Analytics:** Provide analytics and reporting tools for vendors to track their ticket sales and event performance.
- **Social Sharing:** Add social sharing features to allow users to share events on social media platforms.
- **Review System:** Implement a review system where users can leave feedback for events they attended.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.