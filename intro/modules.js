// below are the same, the later is javascript destructuring

const xyz = require('./people');
const { people, ages } = require('./people');


console.log(xyz);
console.log(xyz.people, xyz.ages);

console.log(people, ages);


const os = require('os');

console.log(os);
console.log(os.platform(), os.homedir());