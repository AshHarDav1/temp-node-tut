// //fs.readfile, fs.writefile
//
// const fs = require("node:fs/promises");
// const path = require("path");
//
//
// const pathToDelete = path.join(__dirname, "./content/first.txt");
//
// async function foo(path) {
//     try {
//         return fs.readFile(pathToDelete, "utf-8");
//     } catch (error) {
//         console.log("fuck this shit", error.message)
//     }
// }
// foo(pathToDelete).then(result=>{console.log("result: ", result)});
// console.log("foo invoked: ", foo(pathToDelete));


const {readFile, writeFile} = require("fs");
console.log('start')
readFile('./content/first.txt', "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result2) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result2;
        writeFile(
            './content/result-async.txt',
            `here is the result: ${first} ${second}`, (err, result3) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result3);
                console.log('done')
        });
    });
});
console.log('next')

