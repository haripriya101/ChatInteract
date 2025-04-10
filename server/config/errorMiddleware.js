export const errorHandler = (err, req, res, next) => {
  console.error("Central Error Handler:", err);
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    error: err,
  });
};
