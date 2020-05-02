# inverted-index
Inverted index implementation based on a user interface. Filenames and search query term/terms are input to the program. Program returns a list of files containing the input query term/ terms. The implementation is written using node js.

## Installation
Use the below command for installation
```shell
$ npm --silent install
```

## Usage
Run the command and provide the input as follows. The search terms are to be entered later.
``` shell
$ npm --silent start file1 file2 file3 file4 April
```

File contents:
file1 = Happy Birthday!
file2 = oneko returns a cat
file3 = Jake Peralta is an amazing detective/genius
file4 = April

Output would be:
file4

## Future work
Modify to recursively read files off a directory to populate the inverted index.