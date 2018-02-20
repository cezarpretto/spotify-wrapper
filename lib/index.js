'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = exports.searchPlaylists = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _search = require('./search');

var _album = require('./album');

exports.search = _search.search;
exports.searchArtists = _search.searchArtists;
exports.searchAlbums = _search.searchAlbums;
exports.searchPlaylists = _search.searchPlaylists;
exports.getAlbum = _album.getAlbum;
exports.getAlbums = _album.getAlbums;
exports.getAlbumTracks = _album.getAlbumTracks;