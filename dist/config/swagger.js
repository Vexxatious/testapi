"use strict";
const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';
const endpointsFiles = ['dist/api/userApi.js', 'dist/api/pitchApi.js'];
swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('../index.js');
    console.log('');
});
//# sourceMappingURL=swagger.js.map