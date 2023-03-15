import React from 'react';
import {categoriesPropsType} from '../../helpers/types';

const Category = ({image, name}: categoriesPropsType) => {
   return (
      <div className="bg-[#3B3B3B] rounded-[2.1rem]">
         <div>
            <img className="object-cover w-[100%]" src={image} />
         </div>
         <p className="p-[1rem] my-[1rem] font-bold">{name}</p>
      </div>
   );
};

export default Category;
