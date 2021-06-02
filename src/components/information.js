import React, { Component } from 'react';

import '../styles/info.css'

class ContactInfo extends Component {

    render() { 
        return ( 
            <div id="information">
                <h4 id="contact">Contact Details</h4>
                <p>Owner: Theresa Thomas</p>
            <div class="col">
                <p>Phone</p>
                <p>(423)-883-2742</p>
            </div>
            <div class = "col">
                <p>Email</p>
                <a href="mailto:dalpal1997@gmail.com">dalpal1997@gmail.com</a>
            </div>
            </div>
         );
    }
}
 
export default ContactInfo;