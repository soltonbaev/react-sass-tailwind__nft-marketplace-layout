import React from 'react';

const Artist = ({id, name, change, nftsSold, volume, creatorPic}: any) => {
   return (
      <div className="artist grid grid-cols-2 rounded-[1.25rem] bg-[#3B3B3B] p-4 items-center px-8">
         <div className="flex w-[400px] items-center gap-4">
            <div>{id}</div>
            <img className="w-[40px]" src={creatorPic} />
            <div>
               <h5>{name}</h5>
            </div>
         </div>
         <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 ">
            <div className="flex justify-center text-[green] hidden sm:flex">
               +{change}
            </div>
            <div className="flex justify-center hidden md:flex">{nftsSold}</div>
            <div className="flex justify-center">{volume} ETH</div>
         </div>
      </div>
   );
};

export default Artist;
