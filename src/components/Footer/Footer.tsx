import React from 'react';
import storefrontIcon from './media/storefront-icon.svg';
import discordLogo from './media/DiscordLogo.svg';
import ytLogo from './media/YoutubeLogo.svg';
import twitterLogo from './media/TwitterLogo.svg';
import instagramLogo from './media/InstagramLogo.svg';
import divider from './media/Divider.svg';
import SubscribeForm from './SubscribeForm';
import {Link} from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="bg-secondary">
         <div className="container  mx-auto items-center p-4 md:px-20 md:py-10 ">
            <div className="footer-top grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
               <div className="column1">
                  <div className="flex gap-2">
                     <img src={storefrontIcon} />
                     <h3>NFT Marketplace</h3>
                  </div>
                  <p className="text-[var(--color-grey)]">
                     NFT marketplace UI created with Anima for Figma.
                  </p>
                  <p className="text-[var(--color-grey)]">Join our community</p>
                  <div className="flex gap-2">
                     <img src={discordLogo} />
                     <img src={ytLogo} />
                     <img src={twitterLogo} />
                     <img src={instagramLogo} />
                  </div>
               </div>
               <div className="column2">
                  <h3>Explore</h3>

                  <Link to="/marketplace">
                     <p className="text-[var(--color-grey)]">Marketplace</p>
                  </Link>
                  <Link to="/rankings">
                     <p className="text-[var(--color-grey)]">Rankings</p>
                  </Link>
                  <Link to="/connect-wallet">
                     <p className="text-[var(--color-grey)]">
                        Connect a wallet
                     </p>
                  </Link>
               </div>
               <div className="column3">
                  <h3>Join our weekly digest</h3>
                  <p className="text-[var(--color-grey)] pb-4">
                     Get exclusive promotions & updates straight to your inbox.
                  </p>
                  <SubscribeForm />
               </div>
            </div>
            <div className="border-b border-1 border-[#858584] pt-10"></div>
            <div className="footer-bottom text-[var(--color-grey)] py-2">
               &copy; 2023 layout recreated in React + Tailwind CSS by &nbsp;
               <a target="_blank" href="https://soltonbaev.com">
                  Ibraim Soltonbaev
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
