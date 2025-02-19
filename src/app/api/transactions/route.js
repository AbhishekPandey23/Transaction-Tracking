import { connectToDB } from '@/lib/mongodb';
import Transaction from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDB();
    const transactions = await Transaction.find();
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json(); // Correct way to parse JSON in Next.js API routes
    const { amount, description, category, date } = body;

    if (!amount || !description || !category || !date) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const transactionDate = new Date(date);
    const month = transactionDate.getMonth() + 1; // JavaScript months are 0-based
    const year = transactionDate.getFullYear();

    const newTransaction = new Transaction({
      amount,
      description,
      category,
      date: transactionDate,
      month,
      year,
    });

    await newTransaction.save();
    console.log(newTransaction);
    return NextResponse.json(
      { message: 'Transaction added successfully', newTransaction },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Server Error', details: error.message },
      { status: 500 }
    );
  }
}
