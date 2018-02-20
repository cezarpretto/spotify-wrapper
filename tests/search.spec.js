import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
import axios from 'axios'
chai.use(sinonChai)
sinonStubPromise(sinon)
global.axios = axios

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search'
// --bail para parar no promeiro erro
describe('Search', () => {

  describe('Smoke tests', () => {

    it('should exist the search methods', () => {
      expect(search).to.exist;
    })

    it('should exist the searchAlbums methods', () => {
      expect(searchAlbums).to.exist;
    })

    it('should exist the searchArtists methods', () => {
      expect(searchArtists).to.exist;
    })

    it('should exist the searchTracks methods', () => {
      expect(searchTracks).to.exist;
    })

    it('should exist the searchPlaylists methods', () => {
      expect(searchPlaylists).to.exist;
    })

  })

  describe('Generic Search', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global.axios, 'get')
      promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call get function', () => {
      const artists = search()
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct URL to fetch', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist')
        expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

        const albums = search('Incubus', 'album')
        expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
      })

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album'])
        expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album')
      })
    })

    it('should return the JSON data from the promise', () => {
      promise.resolves({ body: 'json' })
      const artists = search('Incubus', 'artist')
      expect(artists.resolveValue).to.be.eql({ body: 'json' })
    })

  })

  describe('Search Artists', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global.axios, 'get')
      promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call fetch function', () => {
      const artists = searchArtists('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const artists = searchArtists('Incubus')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

      const artists2 = searchArtists('Kraftwerk')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Kraftwerk&type=artist')
    })


  })

  describe('Search Albums', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global.axios, 'get')
      promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call fetch function', () => {
      const albums = searchAlbums('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const albums = searchAlbums('Incubus')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')

      const albums2 = searchAlbums('Kraftwerk')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Kraftwerk&type=album')
    })


  })

  describe('Search Tracks', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global.axios, 'get')
      promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const tracks = searchTracks('Incubus')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')

      const tracks2 = searchTracks('Kraftwerk')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Kraftwerk&type=track')
    })


  })

  describe('Search Playlists', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global.axios, 'get')
      promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call fetch function', () => {
      const playlists = searchPlaylists('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const playlists = searchPlaylists('Incubus')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const playlists2 = searchPlaylists('Kraftwerk')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Kraftwerk&type=playlist')
    })


  })


})
