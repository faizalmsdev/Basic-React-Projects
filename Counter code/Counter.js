import React, { Component } from 'react' // Used to create class component

class Counter extends Component {

    constructor(props) {
    super(props)
    
    this.state = { //used to set the initial value
        count:0
    }
    }
    
    increment(){
        this.setState({ // always use setState property to change the value
            count : this.state.count+1
        })
    }

    decrement(){
        this.setState({
            count : this.state.count - 1
        })
    }

    render() {
    return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.increment()}>Increment</button>
            <button onClick={() => this.decrement()}>Decrement</button>
        </div>
            )
    }
}



export default Counter
