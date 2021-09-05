var inazuma = document.getElementById('inazuma');
var young = document.getElementById('young');


inazuma.addEventListener('click',openMoadl);
function openModal() {
young.style.display= 'block';
}

var jugo /*boutton "sign in"*/ = document.getElementById('jugo');
jugo.addEventListener('click',closeMoadl);
function closeMoadl() {
young.style.display='none';
}

/*var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeMoadl);
function closeMoadl() {
overlay.style.display='none';
}*/