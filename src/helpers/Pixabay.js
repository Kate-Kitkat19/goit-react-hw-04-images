import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const ACCESS_KEY = '30577317-d75a3c052a473ef5b40d5fa17';

const params = `?key=${ACCESS_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;

export async function getPictures(query, page) {
  const response = await axios.get(
    `${BASE_URL}${params}&q=${query}&page=${page}`
  );
  return { total: response.data.totalHits, images: response.data.hits };
}
