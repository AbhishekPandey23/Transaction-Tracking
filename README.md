# Finance Tracker

Finance Tracker is a Next.js-based web application that helps users manage their transactions and budget efficiently. It allows users to track their expenses, set budgets, and analyze financial data.

## Features

- Add, delete, and view transactions
- Set and manage budget limits
- Dashboard with financial insights
- Integrated MongoDB for database storage
- Utilizes Redux Toolkit for state management
- UI components built with ShadCN UI and Tailwind CSS

## Folder Structure

```
finance-tracker/
│── src/
│   │── app/                           # Next.js App Router
│   │   ├── api/
│   │   │   ├── transactions/
│   │   │   │   ├── route.js           # API route (GET, POST transactions)
│   │   │   │   ├── [id]/route.js      # API route (DELETE transaction)
│   │   │   ├── budget/route.js        # API route for budget settings
│   │   ├── dashboard/page.js          # Dashboard page
│   │   ├── page.js                    # Main app page (Home)
│   │   ├── globals.css                # Global styles
│   │── compo/                          # Reusable UI components
│   │   ├── DashboardLayout.js          # Layout for dashboard
│   │   ├── AddTransactionForm.js
│   │   ├── TransactionList.js
│   │   ├── BudgetForm.js
│   │   ├── Dashboard.js
│   │── components/                     # UI components from ShadCN UI
│   │── store/                          # Redux Toolkit Store
│   │   ├── transactionsSlice.js
│   │   ├── budgetSlice.js
│   │   ├── store.js
│   │── models/                         # Mongoose Schemas
│   │   ├── Transaction.js
│   │   ├── Budget.js
│   │── lib/                            # Utility files
│   │   ├── mongodb.js                  # MongoDB connection
│── public/                             # Static assets (icons, images)
│── .env.local                          # Environment variables
│── next.config.js                      # Next.js config
│── package.json                        # Dependencies
│── README.md                           # Documentation
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AbhishekPandey23/Transaction-Tracking.git
   ```
2. Navigate to the project folder:
   ```sh
   cd finance-tracker
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up your `.env.local` file with MongoDB connection string:
   ```env
   MONGODB_URI=your-mongodb-connection-string
   ```
5. Run the development server:
   ```sh
   npm run dev
   ```

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, ShadCN UI
- **State Management:** Redux Toolkit
- **Backend:** Next.js API Routes, Node.js, Express
- **Database:** MongoDB, Mongoose

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

