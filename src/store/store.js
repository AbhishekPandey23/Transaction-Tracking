import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactionsSlice';
import budgetReducer from './budgetSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    budget: budgetReducer,
  },
});
export default store;
