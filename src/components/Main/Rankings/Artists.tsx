import React, {useState} from 'react';
import {artistList} from '../../../helpers/backend-data/artists/artistsList';
import Artist from './Artist';

const Artists = () => {
   const [artists, setArtists] = useState(artistList);
   return (
      <section className="">
         <div className="sort-bar grid grid-cols-2 border-[1px] border-[#3B3B3B] rounded-[1.25rem] py-4 my-4">
            <div className="flex gap-4 px-4">
               <div>#</div>
               <div>Artist</div>
            </div>
            <div className="grid grid-cols-3">
               <div className="flex justify-center hidden sm:block">Change</div>
               <div className="flex justify-center hidden md:block">
                  NFTs Sold
               </div>
               <div className="flex justify-center">Volume</div>
            </div>
         </div>
         <div className="flex flex-col gap-4">
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
         </div>
      </section>
   );
};

export default Artists;
