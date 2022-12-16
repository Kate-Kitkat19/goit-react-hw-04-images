import { getPictures } from '../../helpers/Pixabay';
import React, { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Layout } from 'components/Layout/Layout.styled';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalPages: 0,
    images: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoading: true });
      this.fetchPics()
        .then(data => {
          if (data) {
            this.setState(prevState => {
              return { images: [...prevState.images, ...data] };
            });
          }
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  fetchPics = async () => {
    const { query, page } = this.state;
    const data = await getPictures(query, page);
    if (data.total > 0) {
      const totalPages = Math.ceil(data.total / 12);
      this.setState({ totalPages });
      return data.images;
    } else {
      this.onZeroResult();
    }
  };

  onSubmit = query => {
    this.setState({ query });
    this.setState({ page: 1 });
    this.setState({ images: [] });
  };

  onLoadMore = async () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  onZeroResult = () => {
    toast.error('Sorry, no images found.');
  };

  render() {
    const { isLoading, images, page, totalPages } = this.state;
    return (
      <>
        <Toaster></Toaster>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {isLoading && <Loader />}
        <Layout>
          {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
          {page < totalPages && <Button onClick={this.onLoadMore} />}
        </Layout>
      </>
    );
  }
}
