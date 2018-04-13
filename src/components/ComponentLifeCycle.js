import React from 'react';
import ReactDOM from 'react-dom';

class ComponentLifeCycle extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            counterNumber:0
        }

        this.changeNumber = this.changeNumber.bind(this);
    }

    componentWillMount(){
        console.log("Component will mount")
    }

    componentDidMount(){
        console.log("Component Mounted")
    }

    componentWillUpdate(){
        console.log("Component Will Update")
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    shouldComponentUpdate(newProps,newState){
        console.log("Should component be updated?")
    
        if(newState.counterNumber < 10){
            console.log("component should update");
            return true;
        }else{
            console.log("component should not be updated");
            ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"))
            return false;
        }
      
    }
    

    changeNumber = function(){
        this.setState({
            counterNumber:this.state.counterNumber + 1
        });
    }

    render(){
        return(
            <div> 
               <h1>ComponentLifeCycle</h1>
               <button onClick={this.changeNumber}>+ {this.state.counterNumber}</button>
           </div>
        );
       

    }

}

export default ComponentLifeCycle;