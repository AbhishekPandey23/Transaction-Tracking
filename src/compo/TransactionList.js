'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction, addTransaction } from '@/store/transactionsSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function TransactionList() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/transactions');
        const data = await response.json();
        data.forEach((transaction) => dispatch(addTransaction(transaction)));
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [dispatch]);

  const handleDelete = async (id) => {
    await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    dispatch(deleteTransaction(id));
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
          <ul className="space-y-3">
            {transactions.length === 0 ? (
              <p className="text-gray-500 text-center">
                No transactions found.
              </p>
            ) : (
              transactions.map((transaction) => (
                <li
                  key={transaction._id}
                  className="flex justify-between items-center p-3 border rounded-lg shadow-sm"
                >
                  <span className="font-medium">
                    {transaction.description} - ₹{transaction.amount}
                  </span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(transaction._id)}
                  >
                    Delete
                  </Button>
                </li>
              ))
            )}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
