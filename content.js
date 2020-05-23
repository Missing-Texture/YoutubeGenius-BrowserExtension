// test if script was injected into youtube.com
if(RegExp('^https?:\/\/www\.youtube\.com\/*').test(window.location.href)){
    try {
        browser.runtime.sendMessage({
            query: document.querySelector('.title').firstElementChild.innerHTML.split('(')[0]
        })
    }
    catch(err) {
        alert("Somthing went wrong.\nTry reloading the Page!")
    }
}
else {
    alert("Website not supported.\n\nThis Extension only works with YouTube")
}