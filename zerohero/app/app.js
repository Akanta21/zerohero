import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, Link, browserHistory} from 'react-router'

import samples from './sample-data'
import Message from './components/message'

requirequire('./app.css')

let App = React.createClass({
    getInitialState: function() {
        console.log(samples)
      return {
      "humans": {},
      "stores": {}
      };
    },
    loadSampleData: function(){
        this.setState(samples);
    },
    // User navigates to a /conversation/ will
    componentWillMount: function(){
        if('human' in this.props.params){
            this.loadSampleData()
        }
    },
    render: function(){
        return (
            <div>
                <div id="header"></div>
                <button onClick={this.loadSampleData}>Load Sample Data</button>
                <div className="container">
                    <div className="column">
                        <InboxPane humans={this.state.humans} />
                    </div>
                    <div className="column">
                        {this.props.children || "Select a Conversation from the Inbox"}
                    </div>
                    <div className="column">
                        <StorePane stores={this.state.stores} />
                    </div>
                </div>
            </div>
        )
    }
});

let InboxPane = React.createClass({
    renderInboxItem: function(human){
        return <InboxItem key={human} index={human} details={this.props.humans[human]}/>
    },
    render: function(){
        return(
            <div id="inbox-pane">
                <h1>Inbox</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Chat Received</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.humans).map(this.renderInboxItem)}
                    </tbody>
                </table>
            </div>
        )
    }
});

let InboxItem = React.createClass({
    sortByDate: function(a, b) {
        return a.time > b.time ? -1 : a.time < b.time ? 1 : 0;
    },
    messageSummary: function(conversations){
        var lastMessage = conversations.sort(this.sortByDate)[0];
        return lastMessage.who + ' said: "' + lastMessage.text + '" @ ' + lastMessage.time
    },
    render: function(){
        return(
            <tr>
                <td><Link to={'/conversation/' +
                 encodeURIComponent(this.props.index)}>{this.messageSummary(this.props.details.conversations)}</Link></td>
                <td>{this.props.index}</td>
                <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
            </tr>
        )
    }
})

class ConversationPane extends React.Component {
    constructor(props){
        super(props)
        // this.loadConversationData= this.loadConversationData.bind(this)
    }
    loadConversationData(human){
        this.setState({conversation: samples.humans[human].conversations})
    }
    //Handle when User navigates to /conversation/:human
    componentWillMount(){
        this.loadConversationData(this.props.params.human)
    }
    // Handle when User navigates from /conversation/Rami to conversation/Jeremy
    componentWillReceiveProps(nextProps){
        this.loadConversationData(nextProps.params.human)
    }
    renderMessage(val){
        return <Message who={val.who} text={val.text} key={val.time.getTime()} time={val.time.getTime()}/>
    }
    render() {
        return (
            <div id="conversation-pane">
                <h1>Conversation</h1>
                <h3>{this.props.params.human}</h3>
                <div id="messages">
                    {this.state.conversation.map(this.renderMessage)}
                </div>
            </div>
        )
    }
}

class StorePane extends React.Component{
    constructor(props){
        super(props)
        this.renderStore= this.renderStore.bind(this)
    }
    renderStore(store){
        return <Store key={store} index={store} details={this.props.stores[store]} />
    }
    render(){
        console.log("Stores", this.props.stores)
        return (
        <div id="stores-pane">
            <h1>Stores & Ovens</h1>
            <ul>
                {Object.keys(this.props.stores).map(this.renderStore)}
            </ul>
        </div>
        )
    }
}

class Store extends React.Component{
    getCount(status){
        return this.props.details.orders.filter((n)=> {return n.status === status}).length
    }
    render(){
        return (
            <li>
                <p>{this.props.index}</p>
                <p>Orders Confirmed: {this.getCount("Confirmed")}</p>
                <p>Orders In The Oven: {this.getCount("In The Oven")}</p>
                <p>Orders Delivered: {this.getCount("Delivered")}</p>
            </li>
        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/conversation/:human" component={ConversationPane}></Route>
        </Route>
    </Router>, document.getElementById("main"))