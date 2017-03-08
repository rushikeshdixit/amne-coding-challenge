/* N days of average home sale price data
  K file window size

  Constraints
  1 <= N <= 200,000 days
  1 <= K <= N days

 Input.txt
 5 3
  188930 194123 201345 154243 154243

*/

// var inputData


//Read the file and saving it to the scope
var express = require('express');
var fs = require('fs');
// var promise = readFile();
// var q = require('q');

var readFile = function() {
  return new Promise(function(resolve, reject) {
    fs.readFile('input.txt', 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      const inputData = data;
      console.log(inputData);
      return inputData;
    })
  })
}

// function readFile() {
//   fs.readFile('input.txt', 'utf8', function(err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     const inputData = data;
//     console.log(inputData);
//   });
// }

// readFile.then(function() {console.log('erjaskdas')
// });

readFile().then(function(err, data) {
  return console.log('sadasda');
}).catch(function(error) {
  return console.log('oh no!');
}).then(function() {
  return console.log('carry on');
})

console.log('End of the script');


