// getAlbum
// getAlbumTracks
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
import axios from 'axios'
chai.use(sinonChai)
sinonStubPromise(sinon)
// global.axios = axios

import { getAlbum, getAlbumTracks, getAlbums } from '../src/album'

describe('Album', () => {

  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist
    })

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist
    })

  })

  describe('getAlbum', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(axios, 'get')
      promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call fetch', () => {
      const album = getAlbum()
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call getAlbum with the correct URL', () => {
      const album = getAlbum('6YkkoAG1rnLqET8SgT6ngp')
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/albums/6YkkoAG1rnLqET8SgT6ngp')

      const album2 = getAlbum('6YkkoAG1rnLqET8SgT6ngk')
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/albums/6YkkoAG1rnLqET8SgT6ngk')
    })

    it('should return the JSON data from the promise', () => {
      promise.resolves({ album: 'name' })
      const album = getAlbum('6YkkoAG1rnLqET8SgT6ngp')
      expect(album.resolveValue).to.be.eql({ album: 'name' })
    })

  })

  describe('getAlbums', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(axios, 'get')
      promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call fetch', () => {
      const album = getAlbums()
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call getAlbum with the correct URL', () => {
      const albums = getAlbums(['6YkkoAG1rnLqET8SgT6ngp', '6YkkoAG1rnLqET8SgT6ngk'])
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/albums?ids=6YkkoAG1rnLqET8SgT6ngp,6YkkoAG1rnLqET8SgT6ngk')

      const albums2 = getAlbums(['6YkkoAG1rnLqET8SgT6ngs', '6YkkoAG1rnLqET8SgT6ngi'])
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/albums?ids=6YkkoAG1rnLqET8SgT6ngs,6YkkoAG1rnLqET8SgT6ngi')
    })

    it('should return the JSON data from the promise', () => {
      promise.resolves({ albums: [] })
      const albums = getAlbums(['6YkkoAG1rnLqET8SgT6ngs', '6YkkoAG1rnLqET8SgT6ngi'])
      expect(albums.resolveValue).to.be.eql({ albums: [] })
    })

  })

  describe('getAlbumTracks', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(axios, 'get')
      promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call fetch', () => {
      const tracks = getAlbumTracks()
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call getAlbumTracks with the correct URL', () => {
      const tracks = getAlbumTracks('6YkkoAG1rnLqET8SgT6ngp')
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/albums/6YkkoAG1rnLqET8SgT6ngp/tracks')

      const tracks2 = getAlbumTracks('6YkkoAG1rnLqET8SgT6ngs')
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/albums/6YkkoAG1rnLqET8SgT6ngs/tracks')
    })

    it('should return the JSON data from the promise', () => {
      promise.resolves({ tracks: [] })
      const tracks = getAlbumTracks('6YkkoAG1rnLqET8SgT6ngs')
      expect(tracks.resolveValue).to.be.eql({ tracks: [] })
    })

  })

})
