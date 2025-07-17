const budgetService = require('../services/budgetService');

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await budgetService.getAllBudgets();
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBudget = async (req, res) => {
  try {
    const budget = await budgetService.createBudget(req.body);
    res.status(201).json(budget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBudget = async (req, res) => {
  try {
    const budget = await budgetService.updateBudget(req.params.id, req.body);
    if (!budget) return res.status(404).json({ message: 'Budget not found' });
    res.json(budget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBudget = async (req, res) => {
  try {
    const budget = await budgetService.deleteBudget(req.params.id);
    if (!budget) return res.status(404).json({ message: 'Budget not found' });
    res.json({ message: 'Budget deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};