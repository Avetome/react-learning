var HelloWorld = require("./components/helloworld.jsx");
var React = require("react");
window.React = React;

window.addEventListener("load", function(){
    React.render(<HelloWorld  />, document.body);
}, false);
