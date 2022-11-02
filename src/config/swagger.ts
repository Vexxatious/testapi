const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';
const endpointsFiles = ['dist/api/userApi.js', 'dist/api/pitchApi.js']; // root file where the route starts.

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require('../index.js'); // Your project's root file
  console.log('');
});
