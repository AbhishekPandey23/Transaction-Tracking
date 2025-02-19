import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    category: {
      type: String,
      required: true,
      enum: ['Food', 'Rent', 'Entertainment', 'Travel', 'Fashion', 'Other'],
    },
    month: { type: Number, required: true, min: 1, max: 12 }, // Extracted from date
    year: { type: Number, required: true }, // Extracted from date
  },
  { timestamps: true }
);
export default mongoose.models.Transaction ||
  mongoose.model('Transaction', TransactionSchema);
