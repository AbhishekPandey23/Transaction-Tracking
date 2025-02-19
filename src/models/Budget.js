import mongoose from 'mongoose';

const BudgetSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Rent', 'Entertainment', 'Travel', 'Other'],
  },
  amount: { type: Number, required: true },
  month: { type: Number, required: true, min: 1, max: 12 },
  year: { type: Number, required: true },
});

export default mongoose.models.Budget || mongoose.model('Budget', BudgetSchema);
