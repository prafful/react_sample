import React from 'react'

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            counter:0
        } 
        
        
        
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe(){
        
        console.log("Hello from button" + this.state.counter);
        let newCounter = this.state.counter+1;
        this.setState({
            counter:newCounter
        });
    }

    render(){
        return(
            <div>
                <h4>{this.props.name } is a {this.props.children}</h4> 
                <button onClick={this.clickMe}>Click Me</button> 
                <h1>{this.state.counter}</h1>
            </div>
        );
    }

}


export default Header;