import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [],
  reducers: {
    addTransaction(state, action) {
      const exists = state.some((t) => t._id === action.payload._id);
      if (!exists) state.push(action.payload); // Only add unique transactions
    },
    deleteTransaction(state, action) {
      return state.filter((transaction) => transaction._id !== action.payload);
    },

    editTransaction: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.findIndex((transaction) => transaction.id === id);
      if (index !== -1) {
        return (state[index] = { ...state[index], ...updatedData });
      }
    },
  },
});

export const { addTransaction, deleteTransaction, editTransaction } =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
