import React from 'react';
import image from './Image Placeholder.png';
const CreateAccount = () => {
   return (
      <main className="container mx-auto items-center">
         <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
            <div>
               <img className="object-cover w-[100%]" src={image} />
            </div>
            <div className="flex flex-col gap-4 p-[1.8rem]">
               <h1> Create account</h1>
               <p className="max-w-[460px] lg:text-[1.375rem]">
                  Welcome! enter your details and start creating, collecting and
                  selling NFTs.
               </p>
               <div className="flex flex-col gap-4 w-[320px] ">
                  <input
                     placeholder="Username"
                     className="inp h-[46px]"
                     type="text"
                  />
                  <input
                     placeholder="Email Address"
                     className="inp h-[46px]"
                     type="text"
                  />
                  <input
                     placeholder="Password"
                     className="inp h-[46px]"
                     type="text"
                  />
                  <input
                     placeholder="Confirm Password"
                     className="inp h-[46px]"
                     type="text"
                  />
                  <button className="h-[46px] p-0">Create acount</button>
               </div>
            </div>
         </div>
      </main>
   );
};

export default CreateAccount;
