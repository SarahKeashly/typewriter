// process.stdout prints out each word to the console ine a line instead of console.log... which will print out each character on a separate line

const sentence = "hello there";
let delay = 0; //creating mutable variable


for (const char of sentence) { //looping through the sentence until it is finish - will return each character in the sentence

  setTimeout(() => { //in the set timeout it will reference line 4 and then goes to line 9 and then goes through sentence to next character
    process.stdout.write(char);
  }, delay += 500)
}

setTimeout(() => { //outside of loop, the delay sets the flow and in what order of the setTimeOut
  console.log(''); // the empty string replaces the weird character at the end from the process.stdout.write(char) in the loop
}, delay); //here delay is actually the total amount that is set from the delay in the loop



