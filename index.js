const _ = require("lodash")
const chalk = require("chalk")
let numArray =[1,2,3,4,5,6,7]
console.log(chalk.green ("numArray:",numArray))
_.reverse(numArray)
console.log("_.reverse(numArray):",numArray);