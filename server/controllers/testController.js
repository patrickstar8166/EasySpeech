const test = async (req, res) => {
  res.status(201).json({ success: "route found" });
};

module.exports = {
  test,
};
