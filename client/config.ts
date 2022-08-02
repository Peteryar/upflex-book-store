const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://upflex-book-store-api.herokuapp.com'
    : 'http://localhost:4000';

    export default URL;
