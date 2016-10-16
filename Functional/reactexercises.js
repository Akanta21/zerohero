/**
 * Created by andriankanta on 5/10/16.
 */
var ChildComponent = React.createClass({
    render: function() {
        return (
            <div>
            <div className="prompt">Add a click handler to this button so that when clicked, performMagic is called in the parent component.</div>
        <button onClick={this.props.onClickMagic}>Do Magic</button>
        </div>
        );
    }
});

var GrandParentComponent = React.createClass({
    performMagic: function() {
        alert('TAADAH!');
    },
    render: function() {
        return (
            <div>
            <ParentComponent MagicShow={this.performMagic}/>
        </div>
        );
    }
});

var ParentComponent = React.createClass({
    render: function() {
        return (
            <div>
            <ChildComponent onClickMagic={this.props.MagicShow}/>
        </div>
        );
    }
});

ReactDOM.render(
<GrandParentComponent />,
    document.getElementById('container')
);