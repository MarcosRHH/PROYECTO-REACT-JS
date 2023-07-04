import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h2>
                Last name: { contact.last_name }
            </h2>
            <h2>
                Email: { contact.email }
            </h2>
            <h2>
                Conected: { contact.conected }
            </h2>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;

