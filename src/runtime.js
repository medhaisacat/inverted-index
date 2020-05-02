const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
} )

function readFileNames(getFileNames) {
    readline.question(`Enter files (separate filenames by space): `, (files) => {
        getFileNames(`${files}`.split(" ") )
    } )
}

function readSearchWord(getSearchWord) {
    readline.question(`Enter word to look-up: `, (word) => {
        getSearchWord(`${word}` )
    } )
}

module.exports = {
    readFileNames,
    readSearchWord
}