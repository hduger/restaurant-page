import pageLoad from "./pageload";
import home from "./home"
import menu from "./menu";
import contact from "./contact";




document.body.appendChild(pageLoad())

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', home)

const menuBtn = document.querySelector('.menu')
menuBtn.addEventListener('click', menu)

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', contact)
