import { GalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryStyled>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} img={image}></ImageGalleryItem>;
      })}
    </GalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: propTypes.array,
};
