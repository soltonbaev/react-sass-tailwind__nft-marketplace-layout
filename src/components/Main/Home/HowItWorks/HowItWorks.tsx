import React, {useState} from 'react';
import icon1 from './icon.png';
import icon2 from './icon-1.png';
import icon3 from './icon-2.png';

const HowItWorks = () => {
   const data = [
      {
         id: 1,
         image: icon1,
         title: 'Setup your wallet',
         desc: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
      },
      {
         id: 2,
         image: icon2,
         title: 'Create collection',
         desc: 'Upload your work and setup your collection. Add a description, social links and floor price.',
      },
      {
         id: 3,
         image: icon3,
         title: 'Start earning',
         desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
      },
   ];
   const [items, setItems] = useState([]);
   return (
      <section className="how-it-works py-[2rem]">
         <h2>How It Works</h2>
         <p>Find Out How To Get Started</p>
         <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {data.map(item => {
               return (
                  <div className="aspect-[3/4] bg-[#3B3B3B] rounded-[1.25rem]">
                     <div>
                        <img
                           className="object-cover w-[100%]"
                           src={item.image}
                        />
                     </div>
                     <div className="p-[1rem]">
                        <h5 className="text-[1.275rem]">{item.title}</h5>
                        <p>{item.desc}</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default HowItWorks;
