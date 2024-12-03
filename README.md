This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Philosophy

This project follows the best practices recommended by Next.js, fully utilizing its powerful features while maintaining its simplicity and straightforward nature. Next.js serves as an excellent foundation for creating modern, efficient, and scalable applications.

## How to run project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Decisions & Assumptions

1. ### Container/Presenter Pattern:

   Adopted the container/presenter pattern to separate data fetching logic from UI components, ensuring better modularity and maintainability.

2. ### Server Actions for Data Fetching:

   Implemented "server actions" for fetching data in server components with a caching mechanism of 1 hour to optimize performance.

3. ### Centralized API Calls:

   Centralized all API interactions in an apiCall function, utilizing TypeScript generics to handle various data types efficiently.

4. ### Flexible Component Design:
   Designed components to adapt to future extensions without significant refactoring.

## Area for future improvement

1. ### Enhanced Page Functionality:

   Create dedicated pages for /games, /stores, and /creators to include fully paginated lists, filters, and additional features.

2. ### Optimized State Management:

   As the application scales, consider implementing global state management or migrating to React Query to reduce API calls and improve state handling.

3. ### Comprehensive Testing:

   Introduce comprehensive unit testing and integration tests to ensure code reliability and maintainability.

4. ### zUser Account Management:
   Add a user account page for enhanced personalization and user engagement.
