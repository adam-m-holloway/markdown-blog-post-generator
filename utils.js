module.exports = inputRequired = name => value =>
  /.+/.test(value) ? true : `${name} is required`;
