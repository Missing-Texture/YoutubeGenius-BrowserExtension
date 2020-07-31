const caToken = 'Bearer KiBIJCgvSJ_P-LB_7q1UjnNNoH2f2LlajXVrL3LBFwvWNoAZirXri4ght5sunV36';
const APIurl = 'https://api.genius.com/search?q=';
const searchUrl = 'https://genius.com/search?q=';

browser.browserAction.onClicked.addListener(handleClick);

function handleClick() {
    browser.tabs.executeScript({
        file: "./content.js",
    })
};

browser.runtime.onMessage.addListener(onExecuted)

function onExecuted(result) {
    let search = encodeURI(result.query);
    fetch(APIurl + search, {
        method: 'GET',
        headers: {
            'Authorization': caToken
        },
    })
    .then(data => {
        return data.json()
    })
    .then(result => {
        return result.response.hits[0].result.url
    })
    .then(url => {
        browser.tabs.create({
            url: url
        })
    })
    .catch(err => {
        browser.tabs.create({
            url: searchUrl + search
        })
    });
}