var x=require('./es6_demo');

console.log(x.multi(4,5));
console.log(__dirname);
console.log(__filename);

const os=require('os');
const v=os.freemem();
console.log('free memory is: ${v}');