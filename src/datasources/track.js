const nopedb = require("nope.db");
const PandaDB = require('panda-db');

const { RESTDataSource, Request } = require('apollo-datasource-rest');

require('panda-db');

class TrackAPI extends RESTDataSource {
   constructor() {
     
     super();
 
   const trackDb = new PandaDB({
       name: "track",
       dir: "./src/data"
   });

}

getTrack() {
    return trackDb.get("tracks");
}

getTrack(id) {
   let tracks = trackDb.get("tracks");
   tracks.forEach( function (value) {
      if ( id == value.id_track ) { t = value } 
         else {  console.log(`not a match with ${id} and ${value.id_track}`); }
    });
   return t;
   }

}
module.exports = TrackAPI;
