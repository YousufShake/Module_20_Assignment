const Portfolio = require("../models/Portfolio");

exports.createPortfolio = async (req, res) => {
  try {
    const { title, description, img, codelink, livelink } = req.body;
    const portfolio = new Portfolio({ title, description, img, codelink, livelink, user: req.user.id });

    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: "Error creating portfolio" });
  }
};

exports.getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ user: req.user.id });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: "Error fetching portfolios" });
  }
};

exports.deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: "Portfolio deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting portfolio" });
  }
};

exports.updatePortfolio = async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPortfolio);
  } catch (error) {
    res.status(500).json({ message: "Error updating portfolio" });
  }
};
