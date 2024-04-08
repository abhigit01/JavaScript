// window object :------------------------- global object ,,, automatically created by the browser, it is a browser's object (not javascript's)




let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " I'm Abhishek Kumar "


let boxs = document.querySelectorAll(".box");
// boxs[0].innerText = "new value in first box by javascript";
// boxs[1].innerText = "new value in second box by javascript";
// boxs[2].innerText = "new value in third box by javascript";

let idx =1;
for (i of boxs){
    i.innerText = `new value in ${idx} box by javascrip`;
    idx++;
}
let newbutton1 = document.createElement("button");
newbutton1.innerText ="click me";
let newbutton2 = document.createElement("button");
newbutton2.innerText ="click me";
let newbutton3 = document.createElement("button");
newbutton3.innerText ="click me";
let newbutton4 = document.createElement("button");
newbutton4.innerText ="click me";
let div1 = document.querySelector(".box1");
let div2 = document.querySelector(".box2");
let div3 = document.querySelector(".box3");
let div4 = document.querySelector(".box4");
div1.append(newbutton1);        
div2.prepend(newbutton2);      
div3.before(newbutton3);       
div4.after(newbutton4);        