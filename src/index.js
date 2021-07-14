import { homePage } from "./home";
import { menuPage } from "./menu";
import './style.css';


const content = document.getElementById('content');
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const navItems = ['home', 'menu', 'contact'];

navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', './');
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
    header.appendChild(nav);
});

// content.append(header, homePage(), menuPage());
content.append(header, menuPage());


