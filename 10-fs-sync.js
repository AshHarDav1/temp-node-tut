// //fs module
// //1.Promise example
// const fs = require("node:fs/promises");
// const path = require("path");
//
// const pathDelete = path.join(__dirname, "./content/second.txt");
//
// (async function (path) {
//     try {
//         await fs.unlink(path);
//     }catch (err){
//         console.error("Error has occurred", err.message);
//     }
// })(pathDelete);
//
// //1.2 with Es6 modules more efficient
// // import {unlink} from "fs/promises";
// // try{
// //     await unlink(pathDelete);
// // }catch (err){
// //     console.error(err);
// // }
//
//
// //2.Callback example
// const fs2 = require("fs");
// const path2 = require("path");
//
// const pathDelete2 = path2.join(path2.resolve(), "./content/second.js");
//
// fs2.unlink(pathDelete2, (error)=>{
//     if(error){
//         throw new Error("Error fuck you");
//     }
// });
//
// //3.Synchronous example
// const fs3 = require("fs");
//
// try{
//     fs3.unlinkSync("./content/third.html");
// }catch (err){console.log(err)}





const {readFileSync, writeFileSync} = require("fs");
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
    './content/result-sync.txt',
    `here is the result: ${first}, ${second}`,
    {flag:"a"});
//third parameter is for appending in a file
console.log('done');
console.log('next');