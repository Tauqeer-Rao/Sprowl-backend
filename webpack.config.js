const path = require('path');

module.exports = {
  entry: './app.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  target: 'node', // Set the target environment to node
  // Add any other necessary configurations
};
