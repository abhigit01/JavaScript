let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.input-box').value = string;
        }
        else if(e.target.innerHTML == 'C' ){
            string = "";
            document.querySelector('.input-box').value = string;

        }
        else if(e.target.innerHTML == 'x' ){
            string = string.slice(0,string.length-1);
            
            document.querySelector('.input-box').value = string;

        }
        else
        {
        console.log(e.taregt);
        string = string + e.target.innerHTML;
        document.querySelector('.input-box').value = string;
        }
    })
})





























// buttons.forEach(button => {
//     button.onclick = () =>
//     {
//     console.log("clicked");
//     }
// });


