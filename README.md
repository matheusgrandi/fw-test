# FieldWork Test

## Overview

This README provides an overview of the technologies and dependencies chosen for the development of the FieldWork takehome test.

## Technologies and Dependencies

- **React:** React was chosen as the primary frontend library for building the user interface due to its declarative and component-based nature.
- **TypeScript:** TypeScript was selected as the programming language for the project due to its strong static typing capabilities, which help catch errors during development and provide better code maintainability and scalability compared to plain JavaScript.
- **Vite:** Vite was chosen as the build tool for the project due to its fast build times and modern development experience, enabling quicker development iterations and efficient bundling of assets.
- **Tailwind CSS:** This was my first time using Tailwind, but since in the previous interviews you guys told me that is what you use, I've tried to experience this by myself.
- **PNPM:** PNPM was chosen as the package manager for managing project dependencies due to its deterministic dependency resolution and disk space efficiency.
- **Toastify:** Toastify was selected as the notification library for displaying toast messages within the application, providing a simple and customizable way to notify users about various events and actions.
- **SWR:** SWR was chosen for data fetching due to its simplicity and powerful features like caching, revalidation, and automatic error handling.
- **axios:** Axios was chosen as the HTTP client for making API requests due to its ease of use and promise-based API.
- **React Hook Form:** React Hook Form was chosen for handling form validations and submissions due to its minimal re-renders and easy integration with existing form components.

## Execution

To run the the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/matheusgrandi/prosper-test

   ```

2. Go to the directory

   ```bash
   cd prosper-test

   ```

3. Create a .env file based on .env.template

4. Install the dependencies

   ```bash
   pnpm install

   ```

5. Run the project
   ```bash
   pnpm dev
   ```

## Useful references

- Pnpm: https://pnpm.io/installation
