var React = require("react");

var MenuItem = React.createClass({
    getInitialState: function(){
        return { selected: false };
    },

    render: function(){
        console.debug(this.props.title + " render");

        var self = this;
        var item = this.state.selected
            ? (<li onClick={this.props.onClick}><strong>{self.props.title}</strong></li>)
            : (<li onClick={this.props.onClick}>{self.props.title}</li>);

        return item;
    },
});

module.exports = MenuItem;
