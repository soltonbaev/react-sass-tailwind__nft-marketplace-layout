import React from 'react';
import BrowseCategories from './BrowseCategories/BrowseCategories';
import DiscoverNfts from './DiscoverNfts/DiscoverNfts';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';
import GetStarted from './GetStarted/GetStarted';
import HowItWorks from './HowItWorks/HowItWorks';
import TopCreators from './TopCreators/TopCreators';
import TrendingCollection from './TrendingCollection/TrendingCollection';
import WeeklyDigest from './WeeklyDigest/WeeklyDigest';

const Home = () => {
   return (
      <main className="container mx-auto items-center px-10 py-10">
         <GetStarted />
         <TrendingCollection />
         <TopCreators />
         <BrowseCategories />
         <DiscoverNfts />
         <FeaturedCollection />
         <HowItWorks />
         <WeeklyDigest />
      </main>
   );
};

export default Home;
