import React from 'react';
import {Link} from 'react-router-dom';
import {colPropsType} from '../../helpers/types';

const Collection = ({
   imgMain,
   imgSec,
   imgThird,
   colCounter,
   colName,
   creatorName,
   creatorPic,
}: colPropsType) => {
   return (
      <div className="block-collection flex flex-col gap-4">
         <div className="main-col-img">
            <img className="object-cover w-[100%]" src={imgMain} />
         </div>
         <div className="col-img-grid grid grid-cols-3 gap-4">
            <div>
               <img className="object-cover w-[100%]" src={imgSec} />
            </div>
            <div>
               <img className="object-cover w-[100%]" src={imgThird} />
            </div>
            <div className="flex items-center justify-center bg-[#A259FF] rounded-[1.25rem]">
               {colCounter}
            </div>
         </div>
         <h5>
            <Link to="/nft/1">{colName}</Link>
         </h5>
         <div className="flex gap-2">
            <img src={creatorPic} />
            <span className="creator-name space-mono-font">
               <Link to="/artist/1">{creatorName}</Link>
            </span>
         </div>
      </div>
   );
};

export default Collection;
