# Contributing to Web3Privacy Now Jobs

General contribution information can be found on https://docs.web3privacy.info/contributors, project specific information is outlined in this document.

## Tech stack

-   Node.js (see .node-version)
-   Web framework: Next.js (app router)
-   CSS framework: TailwindCSS
-   Database: Supabase
-   Authentication:
    -   SIWE
    -   Next-Auth
-   Web3:
    -   WalletConnect
    -   Web3Modal

## Project Structure

-   `/src/app`: Next.js app router pages and API routes
-   `/src/components`: React components
-   `/src/utils`: Utility functions and configurations
-   `/src/types`: TypeScript type definitions
-   `/public`: Static assets

## Code Style and Guidelines

Please use the existing linting and formatting rules.

-   `npm run lint` to check for lint errors
-   `npm run format` to check for formatting errors
-   `npm run format:fix` to fix formatting errors
