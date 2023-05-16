import { ContactListItem } from '../ContactListItem/ContactListItem';
import propTypes from 'prop-types';
import { ListContacts, Contact } from './ContactList.styled.jsx';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContacts>
      {contacts.map(contact => {
        return (
          <Contact key={contact.id}>
            <ContactListItem
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          </Contact>
        );
      })}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};
