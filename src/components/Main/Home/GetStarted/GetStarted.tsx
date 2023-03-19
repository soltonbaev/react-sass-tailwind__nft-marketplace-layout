import React, {useState} from 'react';
import nftImg from './space-walking-img.png';
import artistPic from './animakid-pic.png';
import Nft from '../../../Blocks/Nft';

const GetStarted = () => {
   const [nft, setNft] = useState({
      image: nftImg,
      title: 'Space Walking',
      creatorPic: artistPic,
      creatorName: 'AnimaKid',
      price: '',
      highestBid: '',
   });
   return (
      <section className="get-started grid sm:grid-cols-1 lg:grid-cols-2 gap-10 py-[2.5rem]">
         <div className="column flex flex-col justify-center">
            <h1>Discover digital art & Collect NFTs</h1>
            <p>
               NFT marketplace UI created with Anima for Figma. Collect, buy and
               sell art from more than 20k NFT artists.
            </p>
            <button className="my-5 w-[15rem] btn-solid">Get started</button>
            <div className="stats grid grid-cols-3 ">
               <div>
                  <h4>240k+ </h4>
                  <p>Total sale</p>
               </div>
               <div>
                  <h4>100k+</h4>
                  <p>Auctions</p>
               </div>
               <div>
                  <h4>240k+ </h4>
                  <p>Artists</p>
               </div>
            </div>
         </div>
         <div className="column">
            <Nft
               bgColor="#3B3B3B"
               image={nft.image}
               title={nft.title}
               creatorPic={nft.creatorPic}
               creatorName={nft.creatorName}
               priceShown={false}
            />
         </div>
      </section>
   );
};

export default GetStarted;
