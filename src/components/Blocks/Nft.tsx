import React from 'react';
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
      <div className={`block-nft ${bgColor}`}>
         <div>
            <img className="object-cover w-[100%]" src={image} />
         </div>
         <div className="p-5">
            <h5>{title}</h5>
            <div className="creator-data flex gap-2">
               <img src={creatorPic} />
               <span className="creator-name">{creatorName}</span>
            </div>
            {priceShown && (
               <div className="price-row grid grid-cols-2">
                  <div>
                     <p>Price</p>
                     <p>{price}</p>
                  </div>
                  <div>
                     <p>Highest Bid</p>
                     <p>{highestBid}</p>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Nft;
