import React from 'react';
import Timer from '../../../Blocks/Timer';
import bgImage from './NFT Highlight.png';
import avatar from './Avatar Placeholder.png';
import './FeaturedCollection.css';
import {Link} from 'react-router-dom';

const FeaturedCollection = () => {
   return (
      <section
         style={{
            // backgroundImage:
            backgroundImage: `linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%),
               url('${bgImage}')`,
            backgroundPosition: 'center',
         }}
         className="featured-collection h-[660px] relative"
      >
         <div className="absolute left-[50%] bottom-20 -translate-x-[50%] flex flex-col md:flex-row gap-4 ">
            <div>
               <div className="space-mono-font flex justify-center gap-4 bg-[var(--color-secondary)] rounded-[1.25rem] w-[151px] p-[0.5rem]">
                  <img src={avatar} />{' '}
                  <span>
                     <Link to="/artist/1">Shroomie</Link>
                  </span>
               </div>
               <h2>Mushrooms</h2>
               <button className="btn-outlined bg-[white] text-[black]">
                  See Nft
               </button>
            </div>
            <div className="opacity-75">
               <Timer />
            </div>
         </div>
      </section>
   );
};

export default FeaturedCollection;
