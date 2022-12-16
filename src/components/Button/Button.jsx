import { StyledBtn } from './Button.styled';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <StyledBtn type="button" onClick={onClick}>
      Load more
    </StyledBtn>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
