// DOM
// document object model

// const div = document.querySelector ('div')
// const list = document.createElement('ul')
// const item = document.createElement('li')
// // div.innerHtml = 'Good evening'
// div.classList.add('app')

// div.classList.remove('app')


// console.log(div);

// const div2 = document.createElement('div')
// div2.appendChild(div2)

// const example = document.querySelector(".example");
// function addClass(){
//     example.classList.toggle('border')
//     example.style.width = "300px"
// }
// example.onclick = addClass

// example.addEventListener('click',addClass)

// let input = document.querySelector('.inpt');
// const btn = document.querySelector(".btn");

// function addClass() {
//  if(input.checked){ 
//     console.log(true);
// } else {
//     console.log(false);
// }
// }
// btn.addEventListener('click',addClass)

// // как сделать тернарник из иф
// // append prepend

// let input = document.querySelector ('.inpt')
// const btn = document.querySelector('.btn')
// let example = document.querySelector('.example')

// function changeColor(color) {
//     document.body.style.background = color;
// }
  
// function gfg_Run() {
//     changeColor('yellow');
//     el_down.innerHTML = "Background Color changed";
// }  

const btn = document.querySelector('.btn');
const body = document.querySelector('body')

function addClass(){
    let input = document.querySelector ('.inpt').value;
    // btn.classList.toggle('.inpt')
    document.querySelector('.example').style.backgroundColor = input
}

btn.addEventListener('click', addClass)
btn.addEventListener("click",function(){
    
    console.log(input.value);
})