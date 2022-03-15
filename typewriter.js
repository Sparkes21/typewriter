
const typeWriter = (string) => {
string += '\n';
let delay = 0; 
for (const char of string){  
   setTimeout(() => {     process.stdout.write(char);   },delay += 50) 
    //  delay += 50 
   }

 };

console.log(typeWriter('hello there from calgary'));
