import React from 'react';
import SubscribeForm from '../../../Footer/SubscribeForm';
import photo from './Photo.png';
const WeeklyDigest = () => {
   return (
      <section className="weekly-digest grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center bg-[#3B3B3B] p-[3.75rem] rounded-[1.25rem] gap-10 xl:gap-4">
         <div>
            <img src={photo} />
         </div>
         <div className="flex flex-col gap-6">
            <h2>Join our weekly digest</h2>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <SubscribeForm />
         </div>
      </section>
   );
};

export default WeeklyDigest;
