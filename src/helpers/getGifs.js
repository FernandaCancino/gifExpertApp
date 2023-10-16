import 'whatwg-fetch';

const API_KEY_1 = '5LncxyEvfi85QWCvY4e4zndGHWoOI1zk';
const API_KEY_2 = '4ZMg2aHCcV6B4R23wSGMVNavZXQCCOBl';

export const getGifs = async( category ) => {
  // const url = 'api.giphy.com/v1/gifs/search?api_key=4ZMg2aHCcV6B4R23wSGMVNavZXQCCOBl&q=gojo%20satoru';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY_2}&q=${category}&limit=10`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium. url
  }));
  // console.log('gifs: ', gifs)
  return gifs;
}
