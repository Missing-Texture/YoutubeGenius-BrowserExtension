// test if script was injected into youtube.com
if (RegExp('^https?:\/\/www\.youtube\.com\/*').test(window.location.href)) {
    try {
        browser.runtime.sendMessage({
            query: document.querySelector('h1.title').firstElementChild.innerHTML.split('(')[0]
        })
    } catch (err) {
        console.log(err)
        alert("Somthing went wrong.\nTry reloading the Page!")
    }
} else {
    alert("Website not supported.\n\nThis Extension only works with YouTube")
}