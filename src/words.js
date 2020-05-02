var wordList = {
}

function addToList(word, file) {
    if(!(word in wordList) ) {
        wordList[word] = [file]
    } else {
        wordList[word].push(file)
    }
}

function getFiles(word) {
    return wordList[word]
}

module.exports = {
    addToList,
    getFiles
}