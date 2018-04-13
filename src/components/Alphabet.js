import React from 'react';
import '../index.css';

class Alphabet extends React.Component{


    render(){

        let alphabetStyle = {
            color:this.props.fcolor,
            backgroundColor: this.props.bcolor,
            float: "left",
            display: "block",
            padding:5,
            margin:5
        }
        return(
            <div style={alphabetStyle}>
               <h1>{this.props.children}</h1> 
            </div>
        );

    }
        


}

export default Alphabet;