
export default function home(){
    const content = document.getElementById('content');
    const parag = document.querySelector('.about')
    parag.innerText = 'hello'
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

    content.appendChild(parag);
    
}