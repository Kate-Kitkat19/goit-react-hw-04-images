import { Image, GalleryItem } from './ImageGalleryItem.styled';
import { ModalWindow } from '../Modal/Modal';
import propTypes from 'prop-types';
import { useState } from 'react';

export const ImageGalleryItem = ({ img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onImageClick = () => {
    setIsModalOpen(true);
    window.addEventListener('keydown', onEscapeClick);
  };

  const onEscapeClick = evt => {
    if (evt.code === 'Escape') {
      setIsModalOpen(false);
      window.removeEventListener('keydown', onEscapeClick);
    }
  };

  const onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      setIsModalOpen(false);
      window.removeEventListener('keydown', onEscapeClick);
    }
  };

  const { webformatURL, tags, largeImageURL } = img;

  return (
    <>
      {isModalOpen && (
        <ModalWindow
          url={largeImageURL}
          tags={tags}
          onClose={onBackdropClick}
        ></ModalWindow>
      )}
      <GalleryItem>
        <Image src={webformatURL} alt={tags} onClick={onImageClick} />
      </GalleryItem>
    </>
  );
};

ImageGalleryItem.propTypes = {
  img: propTypes.shape({
    webformatURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }),
};
