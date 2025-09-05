module.exports = (fn) => {
  return (re, res, next) => {
    fn(req, res, next).catch(next);
  };
};
