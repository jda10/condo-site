import React, { Component } from 'react';
import '../styles/header.css'

class Header extends Component {
    render() { 
        return (
            <div id="header">
                <p><strong>Edgewater 307 - Tower 3</strong></p>
                <p>1 Bedroom / 1 Bath Condo</p>
                <p>11212 Front Beach Rd, Panama City Beach, FL 32407</p>
            </div>
        );
    }
}
 
export default Header;