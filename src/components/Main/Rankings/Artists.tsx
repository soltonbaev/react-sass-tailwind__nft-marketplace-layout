import React, {useState} from 'react';
import {artistList} from '../../../helpers/backend-data/artists/artistsList';
import Artist from './Artist';

const Artists = () => {
   const [artists, setArtists] = useState(artistList);
   return (
      <section className="">
         <div className="sort-bar grid grid-cols-4">
            <div className="flex">
               <div>#</div>
               <div>Artist</div>
            </div>
            <div>Change</div>
            <div>NFTs Sold</div>
            <div>Volume</div>
         </div>
         {artists
            .filter(artist => artist.id !== 1)
            .map(artist => {
               return (
                  <Artist
                     id={artist.id}
                     name={artist.name}
                     change={artist.change}
                     nftsSold={artist.nftsSold}
                     volume={artist.volume}
                     creatorPic={artist.icon}
                  />
               );
            })}
      </section>
   );
};

export default Artists;
