import { Overlay, Modal } from './Modal.styled';
import propTypes from 'prop-types';

export const ModalWindow = ({ url, tags, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Modal>
        <img src={url} alt={tags} />
      </Modal>
    </Overlay>
  );
};

ModalWindow.propTypes = {
  url: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};
