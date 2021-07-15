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
    header.appendChild(nav);
});
content.append(header, homePage(), menuPage());

const menuContainer = document.querySelector('.menu-container');
const menuBtn = document.getElementById('menu');

const loadPage = () => {
    menuContainer.style.display = 'none';
}

const loadMenu = () => {
    content.removeChild(content.childNodes[1]);
    menuContainer.style.display = 'flex';
}

// bindEvents
document.addEventListener('DOMContentLoaded', loadPage);
menuBtn.addEventListener('click', loadMenu);




