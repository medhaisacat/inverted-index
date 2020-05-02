const fileUtils = require('fs')

function readFile(filename, processData) {
    fileUtils.readFile(filename, (error, data) => {
        try {
            var allWords = []
            var lines = data.toString().split("\n")
            lines.forEach(line => {
                if(line) {
                    var words = line.split(" ")
                    words.forEach(word => {
                        allWords.push(word)    
                    } )
                }
            } )
            
            processData(allWords)
        }
        catch(error) {
            console.error(error.message)
        }
    } )
}

module.exports = {
    readFile
}