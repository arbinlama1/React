// function customRender(reactElement,container) {

//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.Children;
//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target',reactElement.props.target);
//     container.appendChild(domElement);
// }
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for(const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}
let root = document.getElementById('root');
customRender(reactElement, root)