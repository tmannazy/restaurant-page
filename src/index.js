import { homePage } from "./home";
import { menuPage } from './menu';
import './jollof.jpeg';
import './abacha.jpeg';
import './beans.jpeg';
import './style.css';


// cacheDOM
const content = document.getElementById('content');
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const h1 = document.createElement('h1');
const navItems = ['home', 'menu', 'contact'];


// functions
navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = item;
    li.setAttribute('id', item);
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
    h1.textContent = 'kuizin!';
    header.append(h1, nav);
});
content.append(header, homePage(), menuPage());

const navPages = Array.from(document.querySelectorAll('li')),
    mainContainer = document.querySelector('main'),
    menuContainer = document.querySelector('.menu-container'),
    contactContainer = document.querySelector('.contact');


const loadPage = () => {
    menuContainer.style.display = 'none';
}

const pageContents = event => {
    const navClicked = event.target.closest('li');
    if (navClicked.id === 'home') {
        menuContainer.style.display = 'none';
        mainContainer.style.display = 'block';
    } else if (navClicked.id === 'menu') {
        mainContainer.style.display = 'none';
        menuContainer.style.display = 'flex';
    } else if (navClicked.id = 'contact') {
        mainContainer.style.display = 'none';
        menuContainer.style.display = 'flex';
    }
}


// bindEvents
document.addEventListener('DOMContentLoaded', loadPage);
navPages.map(item => item.addEventListener('click', pageContents));




