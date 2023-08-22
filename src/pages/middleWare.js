module.exports = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Intercept OPTIONS requests and respond immediately
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
};
