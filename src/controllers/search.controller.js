/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */
"use strict";


/**
 * custom modules
 */
const userApi = require("../api/user.api");
const playerApi = require("../api/player.api");
const searchApi = require("../api/search.api");
const { msToTimeCode } = require('../utils/helpers.util');

const searchRequest = async (req, res) => {
      res.redirect(`/search/all/${req.body.query}`)

}

const searchAll = async (req, res) => {
      //current user profile
      const currentProfile = await userApi.getProfile(req);

      //recently played
      const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
      const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
      );

      // search result
      const searchAll = await searchApi.getAll(req);

      res.render("./pages/search", {
        currentProfile,
        recentlyPlayedTracks,
        query: req.params.query,
        type: 'all',
        searchAll,
        msToTimeCode
      });

}

const searchTracks = async(req, res) => {
  //current user profile
  const currentProfile = await userApi.getProfile(req);

  //recently played
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = await recentlyPlayed.items.map(
    ({ track }) => track
  );

  // search result
  const searchTracks = await searchApi.getTrack(req);

  res.render("./pages/search_track", {
    currentProfile,
    recentlyPlayedTracks,
    query: req.params.query,
    type: 'tracks',
    searchTracks,
    msToTimeCode
  });
}

const searchAlbum = async(req, res) => {
        //current user profile
        const currentProfile = await userApi.getProfile(req);

        //recently played
        const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
        const recentlyPlayedTracks = await recentlyPlayed.items.map(
          ({ track }) => track
        );
  
        // search result
        const searchAlbum = await searchApi.getAlbum(req);
  
        res.render("./pages/search_album", {
          currentProfile,
          recentlyPlayedTracks,
          query: req.params.query,
          type: 'albums',
          searchAlbum,
        });
}

const searchArtist = async(req, res) => {
  //current user profile
  const currentProfile = await userApi.getProfile(req);

  //recently played
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = await recentlyPlayed.items.map(
    ({ track }) => track
  );

  // search result
  const searchArtist = await searchApi.getArtist(req);

  res.render("./pages/search_artist", {
    currentProfile,
    recentlyPlayedTracks,
    query: req.params.query,
    type: 'artists',
    searchArtist,
  });
}

const searchPlaylist = async(req, res) => {
  //current user profile
  const currentProfile = await userApi.getProfile(req);

  //recently played
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = await recentlyPlayed.items.map(
    ({ track }) => track
  );

  // search result
  const searchPlaylist = await searchApi.getPlaylist(req);

  res.render("./pages/search_playlist", {
    currentProfile,
    recentlyPlayedTracks,
    query: req.params.query,
    type: 'playlists',
    searchPlaylist,
  });
}




module.exports = {
  searchRequest,
  searchAll,
  searchArtist,
  searchAlbum,
  searchTracks,
  searchPlaylist
}