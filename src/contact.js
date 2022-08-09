export default function contact(){
    const content = document.getElementById('content')
    const contactInfo = document.createElement('p');
    contactInfo.classList.add('about')
    contactInfo.innerText = 'waffleman@waffleman.com';
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

    content.appendChild(contactInfo)
}