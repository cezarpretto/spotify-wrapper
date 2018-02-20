import { searchAlbums } from '../src/main'

const albums = searchAlbums('raul seixas')

albums
  .then(data => data.albums.items.map(item => console.log(item.name)))
  .catch(error => console.log(error.response.data))
