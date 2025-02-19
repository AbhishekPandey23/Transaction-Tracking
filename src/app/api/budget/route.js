import { NextResponse } from 'next/server';
import Budget from '@/models/Budget';
import { connectToDB } from '@/lib/mongodb';

export async function GET() {
  try {
    await connectToDB();
    const budget = await Budget.find().sort({ createdAt: -1 }); //find and then sort the budget in descending order by createdAt
    return NextResponse.json(
      { budget, message: 'Budgets fetched successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching budgets' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    await connectToDB();
    const { category, amount, month, year } = await req.json();
    if (!category || !amount || !month || !year) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const newBudget = new Budget({ category, amount, month, year });
    await newBudget.save();
    return NextResponse.json(
      { newBudget, message: 'Budget created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating budget' },
      { status: 500 }
    );
  }
}
