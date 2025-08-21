class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.extensions = { code };  // GraphQL response me dikh jaayega
  }
}

export default CustomError;
