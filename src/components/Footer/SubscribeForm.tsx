import React from 'react';

const SubscribeForm = () => {
   return (
      <div className="flex flex-col md:flex-row gap-y-4 relative">
         <input className="inp" placeholder="enter your email here"></input>
         <button className="md:absolute md:left-[190px]">Subscribe</button>
      </div>
   );
};

export default SubscribeForm;
