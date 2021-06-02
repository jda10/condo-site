import React, { Component } from 'react';

import '../styles/info.css'

class ContactInfo extends Component {

    render() { 
        return ( 
            <div id="information">
                <p>Edgewater 307 - Tower 3</p>
                <p>2 Bedroom / 2 Bath Condo</p>
                <p>11212 Front Beach Rd, Panama City Beach, FL 32407</p>


                <h4 id="contact">Contact Details</h4>
                <p><strong>Owner: Theresa Thomas</strong></p>
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