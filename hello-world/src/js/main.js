var HelloWorld = require("./components/helloworld.jsx");
var React = require("react");
window.React = React;

var MenuExample = require("./components/menu.jsx");

window.addEventListener("load", function(){
    React.render(<HelloWorld  />, document.getElementById("Hello"));
    React.render(
        <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
        document.getElementById("Menu")
    );
}, false);
