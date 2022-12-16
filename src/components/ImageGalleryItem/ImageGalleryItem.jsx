import { Image, GalleryItem } from './ImageGalleryItem.styled';
import React, { Component } from 'react';
import { ModalWindow } from '../Modal/Modal';
import propTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  onImageClick = () => {
    this.setState({ isModalOpen: true });
    window.addEventListener('keydown', this.onEscapeClick);
  };

  onEscapeClick = evt => {
    if (evt.code === 'Escape') {
      this.setState({ isModalOpen: false });
      window.removeEventListener('keydown', this.onEscapeClick);
    }
  };

  onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.img;

    return (
      <>
        {this.state.isModalOpen && (
          <ModalWindow
            url={largeImageURL}
            tags={tags}
            onClose={this.onBackdropClick}
          ></ModalWindow>
        )}
        <GalleryItem>
          <Image src={webformatURL} alt={tags} onClick={this.onImageClick} />
        </GalleryItem>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: propTypes.shape({
    webformatURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }),
};
