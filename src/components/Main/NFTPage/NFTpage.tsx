import React, {useState} from 'react';
import {getNft} from '../../../helpers/backend-data/artists/orbitian/orbitian';
import Timer from '../../Blocks/Timer';
import globe from './globeIcon.png';
import MoreFromArtist from './MoreFromArtist';

const NFTpage = () => {
   const [nft, setNft] = useState(getNft(1));
   return (
      <main className="nft ">
         <div className="nft__image">
            <img className="object-fit w-[100%]" src={nft.image} />
         </div>
         <div className="nft__info container mx-auto p-4 md:px-20 md:py-10">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
               <div className="mx-auto">
                  <Timer />
               </div>
               <div className="md:order-first">
                  <h1>{nft.title}</h1>
                  <p>Minted On {nft.dateMinted}</p>
                  <p className="space-mono-font">Created By</p>
                  <div className="flex gap-2">
                     <img src={nft.creatorPic} />
                     <span>{nft.creatorName}</span>
                  </div>
                  <p className="space-mono-font"></p>
                  <p>{nft.desc}</p>
                  <p className="space-mono-font">Details</p>
                  <p className="flex items-center gap-2">
                     <img src={globe} /> <span>View on Etherscan</span>
                  </p>
                  <p className="flex items-center gap-2">
                     <img src={globe} /> <span>View original</span>
                  </p>
                  <p className="space-mono-font">Tags</p>
                  <div className="flex gap-2">
                     {nft.tags.map((tag: string) => {
                        return (
                           <span className="bg-secondary px-[10px] py-[5px] rounded-[20px] ">
                              {tag}
                           </span>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
         <MoreFromArtist />
      </main>
   );
};

export default NFTpage;
