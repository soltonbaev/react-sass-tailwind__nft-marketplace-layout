import React from 'react';
import GetStarted from './GetStarted/GetStarted';
import TopCreators from './TopCreators/TopCreators';
import TrendingCollection from './TrendingCollection/TrendingCollection';

const Home = () => {
   return (
      <main className="container mx-auto items-center px-10">
         <GetStarted />
         <TrendingCollection />
         <TopCreators />
      </main>
   );
};

export default Home;
