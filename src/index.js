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

const homeBtn = document.getElementById('home'),
    menuBtn = document.getElementById('menu'),
    contactBtn = document.getElementById('contact'),
    mainContainer = document.querySelector('main'),
    menuContainer = document.querySelector('.menu-container');


const loadPage = () => {
    menuContainer.style.display = 'none';
}

const loadHome = () => {
    menuContainer.style.display = 'none';
    mainContainer.style.display = 'block';

}
const loadMenu = () => {
    mainContainer.style.display = 'none';
    menuContainer.style.display = 'flex';
}

// bindEvents
document.addEventListener('DOMContentLoaded', loadPage);
homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);




