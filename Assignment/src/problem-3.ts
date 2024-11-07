{
    function countWordOccurrences(sentence:string,word:string):number{
        let words = sentence.toLowerCase().split(' ');
        
      let newWords =   words.filter(a=>a == word.toLowerCase());
       
       return newWords.length;

    }

    console.log(countWordOccurrences("I love typescript", "typescript"))
}