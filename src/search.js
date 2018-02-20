import { get } from 'axios'
import { SPOTIFY_TOKEN, API_URL } from './configs'
import { getResponseData } from './utils'

const options = {
  headers: {
    Authorization: SPOTIFY_TOKEN
  }
}

const search = (query, type) => get(`${API_URL}/search?q=${query}&type=${type}`, options)
  .then(getResponseData)

const searchArtists = (query) => search(query, 'artist')

const searchAlbums = (query) => search(query, 'album')

const searchTracks = (query) => search(query, 'track')

const searchPlaylists = (query) => search(query, 'playlist')

export {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists
}
