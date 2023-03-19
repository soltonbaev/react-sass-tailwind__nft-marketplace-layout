import React from 'react';
import image from './Image Placeholder.png';
import coinbaseIcon from './Coinbase.png';
import metamaskIcon from './Metamask.png';
import walletConnectIcon from './WalletConnect.png';

const ConnectWallet = () => {
   return (
      <main>
         <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
            <div>
               <img src={image} />
            </div>
            <div className="flex flex-col justify-center gap-4">
               <h1>Connect Wallet</h1>
               <p className="w-[460px]">
                  Choose a wallet you want to connect. There are several wallet
                  providers.
               </p>
               <div className="flex flex-col gap-4">
                  <button className="btn-outlined w-[320px] text-center bg-[#3B3B3B] border-[1px] border-[#a259ff]  relative">
                     <img
                        className="absolute left-10 top-3"
                        src={metamaskIcon}
                     />
                     <span> Metamask</span>
                  </button>
                  <button className="btn-outlined w-[320px] text-center bg-[#3B3B3B] border-[1px] border-[#a259ff] relative">
                     <img
                        className="absolute left-10 top-3"
                        src={walletConnectIcon}
                     />
                     <span>Wallet Connect</span>
                  </button>
                  <button className="btn-outlined w-[320px] text-center bg-[#3B3B3B] border-[1px] border-[#a259ff] relative">
                     <img
                        className="absolute left-10 top-3"
                        src={coinbaseIcon}
                     />
                     Coinbase
                  </button>
               </div>
            </div>
         </div>
      </main>
   );
};

export default ConnectWallet;
