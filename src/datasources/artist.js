const nopedb = require("nope.db");
const PandaDB = require('panda-db');
const { RESTDataSource, Request } = require('apollo-datasource-rest');
const { dataSources } = require("..");

class ArtistAPI extends RESTDataSource {
   constructor() {
      

      super();

      
}

artist  = new Array();

artistDb = new PandaDB({
   name: "artist",
   dir: "./src/data"
});



getArtists() { 
   
  
    return this.artistDb.get("artists");
}

getArtist(id) {
   var r = [];
   let artists = this.artistDb.get("artists");
    artists.forEach( function (value)  {
      if ( id == value.id_artist ) { r = JSON.stringify(value) }
         else {  console.log(`not a match with ${id} and ${value.id_artist}`) }
    }) 
    //console.log(`artist is  ${this.artist}`)

    //console.log(`a is an arrY THEN ${a.id_artist} ${a.api_artist}`)
    //artist.forEach( function (v) {
      console.log(` r is = ${r}    ---`);
      return r;
   }

   
   
    
   
}
module.exports = ArtistAPI;
