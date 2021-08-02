//Problem Statement
//1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Javascript if you do not love something which can give life to your appication what else can you love.';
function countWords(paragraph, word1, word2){
let count1 = 0;
let count2 = 0; 

//Split method applying in input to put the strings into an array of substrings

let input = paragraph.split(' ');

//Applying For loop to iterate the string values
for (let i= 0; i<input.length; i++){
    if (input[i].includes(word1)){//Check String if the first word exists in input array
        count1++;
    }
    if (input[i].includes(word2)){//Check String if the second word exists in input array
        count2++;
    }
}
    //Comparing the word counter to check if word1 occured more than word2
    if (count1 > count2){
    console.log("The Word" + word1 + "more frequently occured than"+ word2);
    } //Comparing the word counter to check if word1 occured more than word2
    else if (count2 > count1){
    console.log("The Word" + word2 + "more frequently occured than"+ word1);
    }
    //if above conditions doesn't matches then executing the same coccurance of words
    else{
    console.log("Both word occured same times");
    }
}

//2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
var content = '';

for (var i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
}


