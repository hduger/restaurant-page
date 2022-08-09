export default function menu(){
    const content = document.getElementById('content');
    const menuCont = document.createElement('p');
    menuCont.classList.add('about')
    menuCont.innerText = 'Belgian Waffles and thats it!!';
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    
    content.appendChild(menuCont);
}