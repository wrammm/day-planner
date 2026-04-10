# day-planner

A day planning application built with Angular that helps you organize and manage your daily tasks.

## Features

- Add tasks with estimated completion times
- Set task start times
- View all tasks in a task list
- Clear completed tasks
- LocalStorage persistence

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v11+)

### Installation

```bash
npm install
```

### Development Server

Start the Angular development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser.

### Running E2E Tests

To run end-to-end tests with a visible browser:

```bash
npx playwright test --headed
```

This will:

- Open a browser window
- Execute the test scenarios
- Show the test results in real-time

For headless mode (no browser window):

```bash
npx playwright test
```

## Project Structure

- `src/app/components/` - Angular components (add-task, task-list, planner, etc.)
- `src/app/services/` - Data store service for task management
- `src/models/` - Task model definition
- `e2e/` - End-to-end tests
