import { homePage } from "./home";
import { menuPage } from './menu';
import { contactPage } from './contact';
import './jollof.jpeg';
import './abacha.jpeg';
import './beans.jpeg';
import './style.css';

// create elements and populate
const content = document.getElementById('content'),
    header = document.createElement('header'),
    footer = document.createElement('footer'),
    footerInfo = document.createElement('p'),
    nav = document.createElement('nav'),
    ul = document.createElement('ul'),
    h1 = document.createElement('h1'),
    navItems = ['home', 'menu', 'contact'];

footerInfo.textContent = 'page created by tmannazy';
footer.append(footerInfo);
content.append(header, homePage(), menuPage(), contactPage(), footer);


// cacheDOM
const mainContainer = document.querySelector('main'),
    menuContainer = document.querySelector('.menu-container'),
    contactContainer = document.querySelector('.contact-container'),
    orderBtn = document.querySelector('.welcome-info button'),
    stickyHeader = document.querySelector('header'),
    stickPos = stickyHeader.offsetTop;


// populate navbar content
navItems.forEach(item => {
    const li = document.createElement('li'),
        a = document.createElement('a');
    a.textContent = item;
    h1.textContent = 'kuizin!';
    a.setAttribute('href', '#');
    li.setAttribute('id', item);
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
    header.append(h1, nav);
});


// callBack Functions
const loadPage = () => {
    menuContainer.style.display = 'none';
    contactContainer.style.display = 'none';
}

const pageContents = event => {
    const navClicked = event.target.closest('li');
    if (navClicked.id === 'home') {
        contactContainer.style.display = 'none';
        menuContainer.style.display = 'none';
        mainContainer.style.display = 'block';
    } else if (navClicked.id === 'menu') {
        contactContainer.style.display = 'none';
        mainContainer.style.display = 'none';
        menuContainer.style.display = 'flex';
    } else if (navClicked.id = 'contact') {
        contactContainer.style.display = 'block';
        mainContainer.style.display = 'none';
        menuContainer.style.display = 'none';
    }
}

const orderMenu = () => {
    contactContainer.style.display = 'none';
    mainContainer.style.display = 'none';
    menuContainer.style.display = 'flex';
}

const pageScroll = () => {
    if (Math.round(window.pageYOffset) > stickPos) {
        stickyHeader.classList.add('sticky');
        stickyHeader.setAttribute('style', 'background: #a9040a');
    } else {
        stickyHeader.classList.remove('sticky');
        stickyHeader.setAttribute('style', 'background: #a9040a75');
    }
}

// bindEvents
document.addEventListener('DOMContentLoaded', loadPage);
window.addEventListener('scroll', pageScroll);
orderBtn.addEventListener('click', orderMenu);
const navPages = Array.from(document.querySelectorAll('li'));
navPages.map(item => item.addEventListener('click', pageContents));




