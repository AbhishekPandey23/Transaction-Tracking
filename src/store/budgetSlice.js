import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {},
  reducers: {
    setBudget(state, action) {
      const { category, amount, month, year } = action.payload;
      state[`${category}-${month}-${year}`] = amount;// this line of code is creating a new key in the state object with the format of category-month-year
    },
    //add budget
    addBudget(state, action) {
      const { category, amount, month, year } = action.payload;
      const key = `${category}-${month}-${year}`;
      if (!state[key]) state[key] = 0;
      state[key] += amount;
    },
  },
});

export const { setBudget, addBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
