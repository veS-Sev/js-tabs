//TABS
let tab = document.querySelectorAll('.info-header-tab'),
info = document.querySelector('.info-header'),
tabContent = document.querySelectorAll('.info-tabcontent');

function hideTabContent(a) {
for (let i = a; i < tabContent.length; i++) {
  tabContent[i].classList.remove('show');
  tabContent[i].classList.add('hide');
}
}
hideTabContent(1);

function showTabContent(b) {
tabContent[b].classList.remove('hide');
tabContent[b].classList.add('show');
}
showTabContent(0);

info.addEventListener('click', function (e) {
let target = event.target;
if (target && target.classList.contains('info-header-tab')) {
  for (let i = 0; i < tab.length; i++) {
    if (target == tab[i]) {
      hideTabContent(0);
      showTabContent(i);
      break;
    }
  }
}
});