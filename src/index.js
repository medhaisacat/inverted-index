const runtime = require('./runtime')
const fileUtils = require('./file-utils')
const wordList = require('./words')

runtime.readFileNames(inputFiles => {
    console.log("Building index...")
    inputFiles.forEach(file => {
        fileUtils.readFile(file, words => {
            words.forEach(word => {
                wordList.addToList(word, file) 
            } )
        })
    } )
    console.log("Done.")

    acceptSearchWord()
})

function acceptSearchWord() {
    runtime.readSearchWord(searchWord => {
        if(wordList.getFiles(searchWord) ) {
            console.log(wordList.getFiles(searchWord) )
        } else {
            console.log("No references found. Try another word!")
        }
        acceptSearchWord()
    } )
}