import propTypes from 'prop-types';
import { FilterContainer, Label } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterContainer>
      <Label>
        Find contacts by name <br />
        <input type="text" value={filter} onChange={onChange}></input>
      </Label>
    </FilterContainer>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
  onChange: propTypes.func.isRequired,
};
