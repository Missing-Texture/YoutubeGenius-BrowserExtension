console.log("Content Script geladen")

let title = document.querySelector('.title').firstElementChild.innerHTML;
let trimmed = title.split('(')[0]; 
trimmed; // needed to pass let as return Value to background.js 