import { homePage } from "./home";
import { menuPage } from './menu';
import { contactPage } from './contact';
import './jollof.jpeg';
import './abacha.jpeg';
import './beans.jpeg';
import './edikang_ikong.jpg';
import './egusi_soup.jpg';
import './okro_soup.webp';
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

footerInfo.innerHTML = `Created by Tmannazy <a href='https://www.github.com/tmannazy' target="_blank"><i class="fab fa-github"></i></a>`;
footer.append(footerInfo);
content.append(header, homePage());


// cacheDOM
const orderBtn = document.querySelector('button.order-btn'),
    stickyHeader = document.querySelector('header'),
    stickPos = stickyHeader.offsetTop,
    body = document.body;
body.insertBefore(footer, body.nextElementSibling);


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
const pageContents = event => {
    const mainContainer = content.querySelector('main'),
        menuContainer = content.querySelector('.menu-container'),
        contactContainer = content.querySelector('.contact-container');
    if (event === undefined) {
        content.removeChild(mainContainer);
        content.appendChild(menuPage());
    } else {
        const navClicked = event.target.closest('li');
        if (navClicked.id === 'home') {
            if (mainContainer === null) {
                if (menuContainer !== null) {
                    content.removeChild(menuContainer);
                    content.appendChild(homePage());
                } else if (contactContainer !== null) {
                    content.removeChild(contactContainer);
                    content.appendChild(homePage());
                }
            } return;
        }
        else if (navClicked.id === 'menu') {
            if (menuContainer === null) {
                if (contactContainer !== null) {
                    content.removeChild(contactContainer);
                    content.appendChild(menuPage());
                } else if (mainContainer !== null) {
                    content.removeChild(mainContainer);
                    content.appendChild(menuPage());
                } return;
            }
        } else if (navClicked.id = 'contact') {
            if (contactContainer === null) {
                if (mainContainer !== null) {
                    content.removeChild(mainContainer);
                    content.appendChild(contactPage());
                } else if (menuContainer !== null) {
                    content.removeChild(menuContainer);
                    content.appendChild(contactPage());
                }
            } return;
        }
    }
}

const orderMenu = () => {
    pageContents();
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
window.addEventListener('scroll', pageScroll);
orderBtn.addEventListener('click', orderMenu);
const navPages = Array.from(document.querySelectorAll('li'));
navPages.map(item => item.addEventListener('click', pageContents));