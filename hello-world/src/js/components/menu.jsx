/** @jsx React.DOM */
var React = require("react");
var MeniItem = require("./menuitem.jsx");

var MenuExample = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },

    clicked: function(index){

        // Обработчик клика обновит состояние
        // изменив индекс на сфокусированный элемент меню
        this.setState({focused: index});
    },

    render: function() {
        console.debug("render");
        var self = this;
        return (
            <div>
                <ul>{ this.props.items.map(function(m, index){

                    var style = '';

                    if(self.state.focused == index){
                        style = 'focused';
                    }

                    // Обратите внимание на использование метода bind(). Он делает
                    // index доступным в функции clicked:

                    //return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
                    return <MeniItem title={m} />;

                }) }

                </ul>

                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );
    }
});

module.exports = MenuExample;
