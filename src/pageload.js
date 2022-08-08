
export default function pageLoad(name){
    const content = document.createElement('div');
    content.innerText = 'hello there ' + name;

    return content
}