import React from 'react';
import {creatorPropsType} from '../../helpers/types';

const Creator = ({
   id,
   creatorPic,
   creatorName,
   totalSales,
}: creatorPropsType) => {
   return (
      <div className="creator-block flex relative flex-col justify-center items-center bg-[#3B3B3B] rounded-[1.25rem] w-[240px] h-[240px] p-[1rem] gap-4">
         <div className="absolute left-[1.25rem] top-[1.25rem] p-[1rem] bg-[#2B2B2B] w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
            {id}
         </div>
         <div className="w-[120px] ">
            <img src={creatorPic} />
         </div>
         <div className="flex flex-col justify-center align-center">
            <h5>{creatorName}</h5>
            <div>
               <span className="color-[grey]">Total Sales: </span>
               <span>{totalSales} ETH</span>
            </div>
         </div>
      </div>
   );
};

export default Creator;
