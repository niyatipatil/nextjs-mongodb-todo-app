# Task Tracker

Task Tracker is a simple and efficient task management application built using Next.js and MongoDB. It helps you keep track of your tasks, allowing you to create, update, view, and delete tasks easily.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- User Authentication (Login and Signup)
- Task Creation, Viewing, Updating, and Deletion
- Real-time Updates

## Usage

After setting up the project, you can access the Task Tracker application at http://localhost:3000. Use the interface to manage your tasks:

- **Create Task:** Navigate to the create task page to add new tasks.
- **View Tasks:** View all your tasks in a list format.
- **Update Task:** Click on a task to edit its details.
- **Delete Task:** Remove tasks that are no longer needed.

## Technologies Used

Frontend:

- Next.js
- React
- Tailwind CSS

Backend:

- Node.js
- Express

Database:

- MongoDB

## Environment Variables

Create a .env file in the root directory and add the following environment variables:

```
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
NEXT_PUBLIC_API_BASE_URL=your-api-base-url
```

## Getting Started

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
