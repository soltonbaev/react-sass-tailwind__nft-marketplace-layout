import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getArtist} from '../../../helpers/backend-data/artists/artistsList';
import discordLogo from '../../Footer/media/DiscordLogo.svg';
import ytLogo from '../../Footer/media/YoutubeLogo.svg';
import twitterLogo from '../../Footer/media/TwitterLogo.svg';
import instagramLogo from '../../Footer/media/InstagramLogo.svg';
import MoreNFTs from './MoreNFTs';

const ArtistPage = () => {
   const [artist, setArtist] = useState(getArtist(1));

   return (
      <main className="artist">
         <div className="artist__cover">
            <img className="object-cover w-[100%]" src={artist.coverImage} />
         </div>
         <div className="artist__icon relative">
            <img
               className="absolute top-[-57px] left-[115px]"
               src={artist.icon}
            />
         </div>
         <div className="artist__info-wrapper container mx-auto items-center p-4 md:px-20 md:py-10">
            <div className="artist__btns flex flex-col lg:flex-row justify-between mt-[6rem] gap-4">
               <h1>{artist.name}</h1>
               <div className="flex flex-col md:flex-row gap-4">
                  <button className="btn-solid h-[60px]">
                     {artist.walletAddress}
                  </button>
                  <button className="btn-outlined h-[60px]">Follow</button>
               </div>
            </div>
            <div className="artist__info pt-4">
               <div className="artist__stats grid grid-cols-3 md:w-[50%]">
                  <div>
                     <h4>{artist.volume}+</h4>
                     <p>Volume</p>
                  </div>
                  <div>
                     <h4>{artist.nftsSold}+</h4>
                     <p>NFTs Sold</p>
                  </div>
                  <div>
                     <h4>{artist.followers}+</h4>
                     <p>Followers</p>
                  </div>
               </div>
               <div className="artist__bio">
                  <p className="space-mono-font">Bio</p>
                  <p>{artist.bio}</p>
               </div>
               <div className="artist__links ">
                  <p className="space-mono-font">Links</p>
                  <div className="flex gap-2">
                     <img src={discordLogo} />
                     <img src={ytLogo} />
                     <img src={twitterLogo} />
                     <img src={instagramLogo} />
                  </div>
               </div>
            </div>
         </div>
         <MoreNFTs />
      </main>
   );
};

export default ArtistPage;
