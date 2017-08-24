import './../css/index.css'
import { sayHelloTo } from './hello.ts'

var module: any;

const span = document.createElement('span');
span.innerText = sayHelloTo('JS Developer');

document.body.appendChild(span);

if (module.hot){
    module.hot.accept();
    module.hot.dispose(() => span.parentNode.removeChild(span));
}