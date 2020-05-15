const caToken = 'Bearer KiBIJCgvSJ_P-LB_7q1UjnNNoH2f2LlajXVrL3LBFwvWNoAZirXri4ght5sunV36';
const url='https://api.genius.com/search?q=';

const parent = document.querySelector('#info');
const menuContainer = document.querySelector('#menu-container');
let title = document.querySelector('.title');

var button = document.createElement('button');
button.className = "custom-button-style";
button.onclick = function () {
    let title = document.querySelector('.title').firstElementChild.innerHTML;
    
    let trimmed = title.split('(')[0];
    console.log(encodeURI(trimmed))

    fetch(url+encodeURI(trimmed), {
        method : 'GET',
        mode: 'cors',
        headers : {
            'Authorization': caToken,
        }
    })
    .then(data=>{return data.json()})
    .then(result=>{return result.response.hits[0].result.url})
    .then(url=>{window.open(url, '_blank');})
    .catch(error => console.log('error', error));
}

menuContainer.parentElement.insertBefore(button, menuContainer)