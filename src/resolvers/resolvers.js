
const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
     
    artists: async ( _, __, { dataSources }) => {
        return artists = await dataSources.artistAPI.getArtists();
    },

    artist: async (_, { id }, { dataSources }) => {
        let artist = await dataSources.artistAPI.getArtist( id );
        console.log(`${artist}  it this an array? `)
        return JSON.parse(artist);
    },

    tracks: async ( _, __, { dataSources }) => {
        return tracks = await dataSources.trackAPI.getTracks();
    },

    track: async (_, { id }, { dataSources }) => {
        return tracks = await dataSources.trackAPI.getTrack( id );
    }
  }
}
module.exports = resolvers;
