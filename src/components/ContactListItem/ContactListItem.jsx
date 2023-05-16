import propTypes from 'prop-types';
import { InfoContact, Button } from './ContactListItem.styled.jsx';

export const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <InfoContact>{contact.name}</InfoContact>
      <InfoContact>{contact.number}</InfoContact>
      <Button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }),
  onDeleteContact: propTypes.func.isRequired,
};
