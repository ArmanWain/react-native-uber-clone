# React Native Uber Clone

A **full-stack Uber clone** built using **React Native**, **Expo**, **PostgreSQL**, and **Zustand**. This application offers a seamless ride-hailing experience, enabling users to easily find rides, track locations in real-time, and securely make payments.

## Video Demo

[![Alt text for image](https://github.com/ArmanWain/react-native-uber-clone/blob/main/assets/demo/demo-preview.png)](https://res.cloudinary.com/dsxbseahw/video/upload/v1737450579/o7pf7dbppbjkkshhtjft.mov)

## Tech Stack

- React Native
- Expo
- Stripe
- PostgreSQL
- Google Maps
- Zustand
- Clerk
- Tailwind CSS

## Features

**Seamless Onboarding**: Easy and intuitive user registration with a smooth setup process.

**OAuth Integration with Google**: Quick and convenient login using Google credentials.

**Live Location Tracking & Google Maps**: Real-time location tracking with interactive map markers for easy ride tracking.

**Google Maps Autocomplete**: Effortless location search with autocomplete suggestions for any destination.

**Ride Search**: Find available rides by entering your "From" and "To" locations.

**Detailed Ride Confirmation**: View essential ride information, including estimated time, price, and route.

**Stripe Payment Integration**: Secure payment processing with multiple options, including credit cards.

**Cross-Platform Support**: Fully optimized for both Android and iOS devices, ensuring a seamless experience across platforms.

## Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

## Installation Steps

Follow these instructions to set up and run the project locally.

1. **Clone the repository**:

   Start by cloning the repository to your local machine:

   ```
   git clone [https://github.com/ArmanWain/react-native-uber-clone.git]
   cd react-native-uber-clone
   ```

2. **Configure environment variables**:

   Create a new file named `.env` in the root of your project and add the following content:

   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=

   EXPO_PUBLIC_PLACES_API_KEY=
   EXPO_PUBLIC_DIRECTIONS_API_KEY=

   DATABASE_URL=

   EXPO_PUBLIC_GEOAPIFY_API_KEY=

   EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   STRIPE_SECRET_KEY=
   ```

   Replace the placeholder values with your actual Clerk, Stripe, NeonDB, Google Maps, and Geoapify credentials. You can
   obtain these credentials by signing up on
   the [Clerk](https://clerk.com/), [Stripe](https://stripe.com/in), [NeonDB](https://neon.tech/), [Google Maps](https://console.cloud.google.com/)
   and [Geoapify](https://www.geoapify.com/) websites respectively.

3. **Install dependencies**:

   Next, install the necessary dependencies:

   ```
   npm i
   ```

4. **Run the project**:

   Finally, start the development server to run the project locally:

   ```
   npx expo start
   ```

   Download the [Expo Go](https://expo.dev/go) app and scan the QR code on your device to view the project.
