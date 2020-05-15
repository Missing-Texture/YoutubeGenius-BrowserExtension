console.log("Genius TEST!");
var menuContainer = document.querySelector('#menu-container');
var menu = document.querySelector('#top-level-buttons');
//var likeButton = menuContainer[0];
var likeButton = menuContainer.children[0];
console.log(menuContainer);
var button = document.createElement('button');
//button.innerHTML = "Testing!!!";
button.className = "custom-button-style";

//menuContainer.appendChild(button);
//menuContainer.insertBefore(button, likeButton);
menuContainer.parentNode.insertBefore(button, menuContainer)