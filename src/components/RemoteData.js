import React from 'react'
import axios from 'axios';

import DisplayUser from "./DisplayUser";

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
        console.log("Check the value of state in constructor")
        console.log(this.state.users)
    }

    getRemoteData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) =>{
            console.log(response.data)
            this.setState({
                users:response.data
            });
        });
    }

    componentWillMount(){
        this.getRemoteData();
    }

    componentDidMount(){
        console.log("Check the value of state after did mount")
        console.log(this.state.users)
    }

    componentDidUpdate(){
        console.log("Check the value of state after did update")
        console.log(this.state.users)
    }

    renderRemoteData(){
        return this.state.users.map((u)=>{
            return(
            <DisplayUser 
                key={u.id}
                name={u.name}
                email={u.email}
                website={u.website}
                latitude={u.address.geo.lat}
                longitude={u.address.geo.lng}
            ></DisplayUser>
        );
        });
    }

    
    render() { 
        return ( 
            <div>
                <h1>Remote Data</h1>
                <table border="1">
                     <tbody>
                            <tr>
                                <th> Name </th>   
                                <th> Email </th>
                                <th> Website </th>  
                                <th> Latitude </th>  
                                <th> Longitude </th>             
                            
                            </tr> 
                     </tbody> 
                     <tbody>
                         {this.renderRemoteData()} 
                    </tbody>     
                  
                </table> 
            </div>
         );
    }
}
 
export default RemoteData;