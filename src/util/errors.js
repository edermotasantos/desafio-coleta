const errors = {
  invalidlenght: {
    error: {
      status: 400,
      message: 'your answer is too short (use at least 15 words).',
    },
  },
  missingData: {
    error: {
      status: 401,
      message: 'this field must be filled',
    },
  },
};
  
module.exports = errors;