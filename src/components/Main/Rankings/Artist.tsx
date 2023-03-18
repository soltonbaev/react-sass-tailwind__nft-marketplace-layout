import React from 'react';

const Artist = ({id, name, change, nftsSold, volume, creatorPic}: any) => {
   return (
      <div className="artist grid grid-cols-4">
         <div className="flex">
            <div>{id}</div>
            <div>
               <img src={creatorPic} />
               {name}
            </div>
         </div>
         <div>{change}</div>
         <div>{nftsSold}</div>
         <div>{volume}</div>
      </div>
   );
};

export default Artist;
