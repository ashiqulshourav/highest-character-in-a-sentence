const sen = "The quick brown fox jumped over the lazy dog";

const words = sen.split(" ");

const longestWord = words.sort(function(a, b){
   return b.length - a.length;
});

console.log(longestWord[0])