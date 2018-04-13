import React from 'react';
import jsondata from '../data.json';

class LocalJson extends React.Component{

    componentWillMount(){
        console.log("JSON from local file: ")
        console.log(jsondata)
    }

    callMe(e){
        console.log("called from LI rendered in map")
        console.log(e);
    }

    getMeLi(){
         return jsondata.map((mydata)=>{
           
                if(mydata.id === 4 || mydata.id===1){
                    return (
                            <li key={mydata.id} onClick={this.callMe}>{mydata.title}</li>
                            )
                }
                
           
        })
    }

    render(){
        return(
            <div>
                <h1>Working with Local JSON array</h1>
                <ol>
                    {this.getMeLi()}
                </ol>
           </div>
        );
        //return React.createElement('div',{className:'one'},
        //        React.createElement('h1', {className:'two'}, 
        //                            'Behind The Scenes'));

    }

}

export default LocalJson;