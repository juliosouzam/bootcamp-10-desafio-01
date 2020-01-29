function logRequests(req, res, next) {
  console.count('Numero de requisições');

  return next();
}

module.exports = { logRequests };
