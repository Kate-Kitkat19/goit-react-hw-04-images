import { getPictures } from '../../helpers/Pixabay';
import React, { useState, useEffect } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Layout } from 'components/Layout/Layout.styled';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    const fetchPics = async () => {
      const data = await getPictures(query, page);
      if (data.total > 0) {
        const totalPages = Math.ceil(data.total / 12);
        setTotalPages(totalPages);
        return data.images;
      } else {
        onZeroResult();
      }
    };
    fetchPics()
      .then(data => {
        if (data) {
          setImages(prevImages => [...prevImages, ...data]);
        }
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [page, query]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  const onLoadMore = async () => {
    setPage(prev => prev + 1);
  };

  const onZeroResult = () => {
    toast.error('Sorry, no images found.');
  };

  return (
    <>
      <Toaster></Toaster>
      <Searchbar onSubmit={onSubmit}></Searchbar>
      {isLoading && <Loader />}
      <Layout>
        {error && 'Sorry, something went wrong. Please retry later'}
        {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
        {page < totalPages && <Button onClick={onLoadMore} />}
      </Layout>
    </>
  );
};
