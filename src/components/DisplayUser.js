
import React from 'react'

class DisplayUser extends React.Component {
    render() { 
        return ( 
            
                <tr>
                    <td>{this.props.name}</td> 
                    <td>{this.props.email}</td>
                    <td>{this.props.website}</td>
                    <td>{this.props.latitude}</td>
                    <td>{this.props.longitude}</td>


                </tr>
                
         )
    }
}
 
export default DisplayUser ;