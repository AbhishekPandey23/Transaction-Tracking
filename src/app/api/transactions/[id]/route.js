import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Transaction from '@/models/Transaction';

// GET a single transaction by ID
export async function GET(req, { params }) {
  try {
    await connectToDB();
    const transaction = await Transaction.findById(params.id);
    if (!transaction)
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );

    return NextResponse.json(transaction, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

// UPDATE (PUT) a transaction by ID
export async function PUT(req, { params }) {
  try {
    await connectToDB();
    const data = await req.json();
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      params.id,
      data,
      { new: true }
    );

    if (!updatedTransaction)
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );

    return NextResponse.json(updatedTransaction, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

// DELETE a transaction by ID
export async function DELETE(req, { params }) {
  try {
    await connectToDB();

    const deletedTransaction = await Transaction.findByIdAndDelete(params.id);

    if (!deletedTransaction) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Transaction deleted successfully', id: params.id }, // Return the deleted ID
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting transaction:', error); // Debugging
    return NextResponse.json(
      { error: 'Server Error', details: error.message },
      { status: 500 }
    );
  }
}
