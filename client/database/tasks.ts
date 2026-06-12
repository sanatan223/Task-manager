import { type Task } from "../src/types";

export const tasks: Task[] = [
  {
    id: "proj-101",
    title: "Setup CI/CD Pipeline",
    description: "Configure GitHub Actions to automatically run tests and deploy the app to Vercel.",
    time: "June 4, 2026",
    status: "done"
  },
  {
    id: "proj-102",
    title: "Dashboard Redesign",
    description: "Update the main analytics dashboard components to match the new Figma design system.",
    time: "June 10, 2026",
    status: "in-progress"
  },
  {
    id: "proj-103",
    title: "User Authentication",
    description: "Implement OAuth2 login and sign-up flows using Google and GitHub providers.",
    time: "June 15, 2026",
    status: "todo"
  },
  {
    id: "proj-104",
    title: "Migrate Database",
    description: "Move the legacy user data from the old PostgreSQL database to the new MongoDB cluster.",
    time: "June 22, 2026",
    status: "todo"
  },
  {
    id: "proj-105",
    title: "Write API Documentation",
    description: "Document all user-facing REST endpoints using Swagger UI.",
    time: "July 1, 2026",
    status: "todo"
  }
];