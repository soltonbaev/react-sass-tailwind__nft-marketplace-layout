import React from 'react';
import storefrontIcon from './media/storefront-icon.svg';
import discordLogo from './media/DiscordLogo.svg';
import ytLogo from './media/YoutubeLogo.svg';
import twitterLogo from './media/TwitterLogo.svg';
import instagramLogo from './media/InstagramLogo.svg';
import divider from './media/Divider.svg';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
   return (
      <footer className="bg-secondary">
         <div className="container  mx-auto items-center px-10 ">
            <div className="footer-top grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
               <div className="column1">
                  <div className="flex">
                     <img src={storefrontIcon} />
                     <h3>NFT Marketplace</h3>
                  </div>
                  <p>NFT marketplace UI created with Anima for Figma.</p>
                  <p>Join our community</p>
                  <div className="flex gap-2">
                     <img src={discordLogo} />
                     <img src={ytLogo} />
                     <img src={twitterLogo} />
                     <img src={instagramLogo} />
                  </div>
               </div>
               <div className="column2">
                  <h3>Explore</h3>

                  <p>Marketplace</p>
                  <p>Rankings</p>
                  <p>Connect a wallet</p>
               </div>
               <div className="column3">
                  <h3>Join our weekly digest</h3>
                  <p>
                     Get exclusive promotions & updates straight to your inbox.
                  </p>
                  <SubscribeForm />
               </div>
            </div>
            <div className="border-b pt-10"></div>
            <div className="footer-bottom py-2">
               &copy; layout crafted by Ibraim Soltonbaev 2023
            </div>
         </div>
      </footer>
   );
};

export default Footer;
