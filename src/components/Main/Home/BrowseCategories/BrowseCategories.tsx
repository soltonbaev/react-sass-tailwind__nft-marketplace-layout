import React, {useState} from 'react';
import {browseCategories} from '../../../../helpers/backend-data/browseCategories/browseCategories';
import Category from '../../../Blocks/Category';

const BrowseCategories = () => {
   const [categories, setCategories] = useState(browseCategories);
   return (
      <section className="py-[2.5rem]">
         <h2>Browse categories</h2>
         <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-10 mt-[2rem]">
            {categories.map(category => {
               return (
                  <Category
                     key={category.id}
                     image={category.image}
                     name={category.name}
                  />
               );
            })}
         </div>
      </section>
   );
};

export default BrowseCategories;
