import { RotatingLines } from 'react-loader-spinner';
import { StyledLoaderWrap } from './Loader.styled';
import { createPortal } from 'react-dom';

export const Loader = () => {
  return createPortal(
    <StyledLoaderWrap>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </StyledLoaderWrap>,
    document.getElementById('loader')
  );
};
