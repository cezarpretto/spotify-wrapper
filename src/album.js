import { get } from 'axios'
import { SPOTIFY_TOKEN, API_URL } from './configs'
import { getResponseData } from './utils'

const options = {
  headers: {
    Authorization: SPOTIFY_TOKEN
  }
}

const getAlbum = id => get(`${API_URL}/albums/${id}`, options)
  .then(getResponseData)

const getAlbumTracks = (id) => get(`${API_URL}/albums/${id}/tracks`, options)
  .then(getResponseData)

const getAlbums = (ids) => get(`${API_URL}/albums?ids=${ids}`, options)
  .then(getResponseData)

export {
  getAlbum,
  getAlbumTracks,
  getAlbums
}
