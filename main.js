function reverseString() {
let input=document.querySelector("input");
let string=input.value,output="";
for(let i=string.length-1;i>=0;i--){
  output=output+ string[i];
}
const p=document.querySelector("p");
p.innerHTML=output;
}