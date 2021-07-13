import { homePage } from "./home";
import './style.css';


const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const navItems = ['home', 'menu', 'contact'];
navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', './' + item + '.js');
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
    header.appendChild(nav);
})

const content = document.getElementById('content');
content.appendChild(homePage());
body.appendChild(header);


