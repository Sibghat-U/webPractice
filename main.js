let count=0;
const el=document.createElement("span");
const p=document.querySelector("p");
let input=document.querySelector("input");

const body=document.querySelector("body");
body.appendChild(el);

function reverseString() {
  p.innerHTML="";
  let output="";
  count++;
  let string=input.value;

for (let i = string.length - 1; i >= 0; i--) {
  output = output + string[i];
}
p.innerHTML=p.innerHTML+output;
el.innerHTML="Count: "+ count;

}
