import React from 'react';
import {Link} from 'react-router-dom';
import {creatorPropsType} from '../../helpers/types';

const Creator = ({
   id,
   creatorPic,
   creatorName,
   totalSales,
}: creatorPropsType) => {
   return (
      <div className="creator-block flex relative flex-col justify-center items-center bg-[#3B3B3B] rounded-[1.25rem]  p-[1rem] gap-4 aspect-square">
         <div className="absolute left-1 top-1 sm:left-[1.25rem] sm:top-[1.25rem] p-[1rem] bg-[#2B2B2B] w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
            {id}
         </div>
         <div>
            <img className="object-cover w-[100%]" src={creatorPic} />
         </div>
         <div className="flex flex-col justify-center align-center">
            <h5>
               <Link to="/artist/1">{creatorName}</Link>
            </h5>
            <div>
               <span className="text-[#858584]">Total Sales: </span>
               <span className="space-mono-font">{totalSales} ETH</span>
            </div>
         </div>
      </div>
   );
};

export default Creator;
