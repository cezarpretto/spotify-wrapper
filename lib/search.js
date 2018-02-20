'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _axios = require('axios');

var _configs = require('./configs');

var _utils = require('./utils');

var options = {
  headers: {
    Authorization: _configs.SPOTIFY_TOKEN
  }
};

var search = function search(query, type) {
  return (0, _axios.get)(_configs.API_URL + '/search?q=' + query + '&type=' + type, options).then(_utils.getResponseData);
};

var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

exports.search = search;
exports.searchArtists = searchArtists;
exports.searchAlbums = searchAlbums;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;