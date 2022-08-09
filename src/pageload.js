
export default function pageLoad(){

    const para = document.createElement('p');
    para.classList.add('about');
    para.innerText = 'We are the best Waffle Making Company on the \
    east side of the Mississippi River'

    const content = document.getElementById('content');
    content.appendChild(para);

    return content
}