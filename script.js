var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');


btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeMoadl);
function closeMoadl() {
overlay.style.display='none';
}

var btn /*boutton "login"*/ = document.getElementById('btn');
btn.addEventListener('click',closeMoadl);
function closeMoadl() {
overlay.style.display='none';
}
