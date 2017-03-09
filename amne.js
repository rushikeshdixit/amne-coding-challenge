/* N days of average home sale price data
  K file window size

  Constraints
  1 <= N <= 200,000 days
  1 <= K <= N days

 Input.txt
 5 3
  188930 194123 201345 154243 154243


Window = N-K+1
*/

// var inputData


//Read the file and saving it to the scope
var express = require('express');
var fs = require('fs');


// var readFile = function() {
//   return new Promise(function(resolve, reject) {
//     fs.readFile('input.txt', 'utf8', function(err, data) {
//       if (err) {
//         return console.log(err);
//       }
//       const inputData = data;
//       console.log(inputData);
//       return inputData;
//     })
//   })
// }

fs.readFileAsync = function(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) {
       // console.log('err:', err);
        reject(err);
      }
        // console.log('data:', data);
        // return data;
        resolve(data);
    })
  })
}

var calcResult = function(data) {

  var input = data.split('\n');
  //I need to convert these to ints
  var firstLine = input[0].split(' ');
  for (var i = 0; i< firstLine.length; i++) {
    firstLine[i] = parseInt(firstLine[i], 10);
  }

  var averagePrice = input[1].split(' ');
  for (var i = 0; i< averagePrice.length; i++) {
    averagePrice[i] = parseInt(averagePrice[i], 10);
  }

  // var numDays = inputs[0];
  let result = 0;
  // const windowNum = firstLine[1];
  const windowNum = firstLine[0] - firstLine[1] + 1;

  console.log(firstLine);
  console.log(averagePrice);
  console.log(windowNum);

  for (var i = 0; i < windowNum; i++) {
    if (averagePrice[i] < averagePrice[i+1]) {
      console.log('index:', i);
      console.log('ran');
      result ++;
    } else if(averagePrice[i] > averagePrice[i+1]) {
      console.log('less than ran');
      result --;
    }
  }

  console.log('Result:', result);
  return result;
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

// readFile().then(function(err, data) {
//   return console.log('sadasda');
// }).catch(function(error) {
//   return console.log('oh no!');
// }).then(function() {
//   return console.log('carry on');
// })

fs.readFileAsync('input.txt')
  .then(function(data) {
  // const inputData = data;
  calcResult(data);
  console.log('inputdata:', data);
}).catch(function(err) {
  if (err) {
    console.log('err', err);
  };
});

console.log('End of the script');


