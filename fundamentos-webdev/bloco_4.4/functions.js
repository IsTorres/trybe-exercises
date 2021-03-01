function palindromo(param){
  let word = param;
  let isPalindrome = true;

  for(let i = 1; i < word.length; i += 1){
    if(word[i - 1] !== word[word.length - i]){
      isPalindrome = false
    }    
  }
  return isPalindrome
}

console.log(palindromo('ismael'));