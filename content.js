console.log("Content Script injected")

//let title = document.querySelector('.title').firstElementChild.innerHTML;
//let trimmed = title.split('(')[0]; 

browser.runtime.sendMessage({
    query: document.querySelector('.title').firstElementChild.innerHTML.split('(')[0]
})