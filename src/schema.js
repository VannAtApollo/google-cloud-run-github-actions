const { gql } = require('apollo-server');

const typeDefs = gql`
 
  type Query  { 
    artists: [Artist]
    artist(id: ID!): Artist
    track(id: ID!): Track
    tracks: [Tracks]
    
  }

type Tracks {
tracks: [Track]
}

type Track {
  track_name: String
  id_track: ID
  haslyrics: Boolean
  artist: String
  id_artist: ID
  album: String
  id_album: ID
  bpm: Int
  lang: String
  cover: String
  api_artist: String
  api_albums: String
  api_album: String
  api_tracks: String
  api_track: String
  api_lyrics: String
}

type Artist {
  artist: String
  id_artist: Int
  cover: String
  api_artist: String
  api_albums: String
}

type Artists {
  artists: [Artist]
  }

type AlbumsForArtist {
  artist: String!
  id_artist: Int!
  length: Int
  albums: [Album]
}

type Album {
  id_album: ID!
  name: String!,
  cover: String
  api_album: String
  api_tracks: String
} 
`;
module.exports = typeDefs;
