import React from 'react';
import {Link} from 'react-router-dom';
import {nftPropsType} from '../../helpers/types';

const Nft = ({
   bgColor,
   image,
   title,
   creatorPic,
   creatorName,
   price,
   highestBid,
   priceShown,
}: nftPropsType) => {
   return (
      <div className={`block-nft bg-[${bgColor}]`}>
         <div>
            <img className="object-cover w-[100%]" src={image} />
         </div>
         <div className="p-8">
            <h5>
               <Link to="/nft/1">{title}</Link>
            </h5>
            <div className="creator-data flex gap-2 pt-1">
               <img src={creatorPic} />
               <span className="creator-name space-mono-font">
                  <Link to="/artist/1">{creatorName}</Link>
               </span>
            </div>
            {priceShown && (
               <div className="price-row flex justify-between pt-4">
                  <div>
                     <p className="flex flex-col gap-1 ">
                        <span className="space-mono-font text-[12px] text-[#858584]">
                           Price
                        </span>
                        <span className="space-mono-font">{price} ETH</span>
                     </p>
                  </div>
                  <div>
                     <p className="flex flex-col gap-1">
                        <span className="space-mono-font text-[12px] text-[#858584]">
                           Highest Bid
                        </span>
                        <span className="space-mono-font">
                           {highestBid} WETH
                        </span>
                     </p>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Nft;
