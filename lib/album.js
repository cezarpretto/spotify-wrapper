'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = exports.getAlbumTracks = exports.getAlbum = undefined;

var _axios = require('axios');

var _configs = require('./configs');

var _utils = require('./utils');

var options = {
  headers: {
    Authorization: _configs.SPOTIFY_TOKEN
  }
};

var getAlbum = function getAlbum(id) {
  return (0, _axios.get)(_configs.API_URL + '/albums/' + id, options).then(_utils.getResponseData);
};

var getAlbumTracks = function getAlbumTracks(id) {
  return (0, _axios.get)(_configs.API_URL + '/albums/' + id + '/tracks', options).then(_utils.getResponseData);
};

var getAlbums = function getAlbums(ids) {
  return (0, _axios.get)(_configs.API_URL + '/albums?ids=' + ids, options).then(_utils.getResponseData);
};

exports.getAlbum = getAlbum;
exports.getAlbumTracks = getAlbumTracks;
exports.getAlbums = getAlbums;