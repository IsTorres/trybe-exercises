const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};
console.log(uppercase('test', (str) => str));
//

module.exports = 
  uppercase;