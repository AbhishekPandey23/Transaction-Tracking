'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudget } from '@/store/budgetSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BudgetForm = () => {
  const dispatch = useDispatch();
  const [budget, setBudget] = useState({
    category: '',
    amount: '',
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const handleChange = (e) => {
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!budget.category || !budget.amount || !budget.month || !budget.year) {
      alert('All fields are required!');
      return;
    }

    const newBudget = {
      category: budget.category,
      amount: Number(budget.amount),
      month: Number(budget.month),
      year: Number(budget.year),
    };

    // Send to Redux store
    dispatch(addBudget(newBudget));

    // Send to backend
    await fetch('/api/budget', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBudget),
    });

    setBudget({
      category: '',
      amount: '',
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Set Monthly Budget</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select
            onValueChange={(value) => setBudget({ ...budget, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Food">Food</SelectItem>
              <SelectItem value="Rent">Rent</SelectItem>
              <SelectItem value="Entertainment">Entertainment</SelectItem>
              <SelectItem value="Travel">Travel</SelectItem>
              <SelectItem value="Fashion">Fashion</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="number"
            name="amount"
            value={budget.amount}
            onChange={handleChange}
            placeholder="Enter Amount"
          />

          <Input
            type="number"
            name="month"
            value={budget.month}
            onChange={handleChange}
            placeholder="Month (1-12)"
            min="1"
            max="12"
          />

          <Input
            type="number"
            name="year"
            value={budget.year}
            onChange={handleChange}
            placeholder="Year"
          />

          <Button type="submit" className="w-full">
            Save Budget
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BudgetForm;
