const Budget = require('../models/budgetModel');

class BudgetService {
  static async getAllBudgets() {
    return await Budget.find().populate('project');
  }

  static async createBudget(data) {
    const budget = new Budget(data);
    return await budget.save();
  }

  static async updateBudget(id, data) {
    return await Budget.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  static async deleteBudget(id) {
    return await Budget.findByIdAndDelete(id);
  }
}

module.exports = BudgetService;