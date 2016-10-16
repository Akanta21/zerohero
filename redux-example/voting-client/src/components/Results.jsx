import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Results extends React.Component {
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    getPair(){
        return this.props.pair || []
    }
    getVotes(entry){
        if(this.props.tally && this.props.has(entry)) {
            return this.props.tally.get(entry)
        }
    }
    render() {
        return <div className="results">
            {this.getPair().map(entry =>
                <div key={entry} className="entry">
                    <h1>{entry}</h1>
                </div>)}
        </div>
    }
}

export default Results