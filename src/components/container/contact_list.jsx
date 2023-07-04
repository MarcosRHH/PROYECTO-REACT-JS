import React from 'react';
import { STATE } from '../../models/state.enum';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {
    const defaultContact = new Contact('Marcos', 'Huanca', 'marco@gmail.com', STATE.true);

    return (
        <div>
            <div>
                <h1>Your Contacts</h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
