import React, { Component } from 'react';

import '../styles/info.css'

class ContactInfo extends Component {

    render() { 
        return ( 
            <div id="information">
                <h4 id="contact">Contact Details</h4>
                <p><strong>Owner: Teresa Thomas</strong></p>
            <div class="col">
                <p>Phone</p>
                <a href="tel:4232901847">(423)-290-1847</a>
                <p></p>
            </div>
            <div class = "col">
                <p>Email</p>
                <a href="mailto:teresacthomas69@gmail.com">teresacthomas69@gmail.com</a>
            </div>
            </div>
         );
    }
}
 
export default ContactInfo;