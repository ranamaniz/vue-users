# README

## Project Overview

This project is a Vue.js application for managing user data. The app provides functionality for adding, updating, deleting and viewing users.

## Getting Started

### 1. Install Dependencies

Before starting, ensure you have [pnpm](https://pnpm.io/) installed. You can install it using npm:

```sh
npm install -g pnpm
```

Then, install the project dependencies:

```sh
pnpm install
```

### 2. Setup JSON Server

This project uses JSON Server to simulate a REST API. To set up the server:

Create a `.env` file in the root directory.

Add the following line to the `.env` file:

```sh
VITE_API_BASE_URL=http://localhost:8000
```

Run the JSON Server:

```sh
pnpm run server
```

### 3. Run the Application

```sh
pnpm dev
```
