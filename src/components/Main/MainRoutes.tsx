import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ArtistPage from './ArtistPage/ArtistPage';
import ConnectWallet from './ConnectWallet/ConnectWallet';
import CreateAccount from './CreateAccount/CreateAccount';
import Home from './Home/Home';
import Marketplace from './Marketplace/Marketplace';
import NFTpage from './NFTPage/NFTpage';
import Rankings from './Rankings/Rankings';

const MainRoutes = () => {
   const routeData = [
      {id: 1, path: '/artist/:id', element: <ArtistPage />},
      {id: 2, path: '/connect-wallet', element: <ConnectWallet />},
      {id: 3, path: '/create-account', element: <CreateAccount />},
      {id: 4, path: '/marketplace', element: <Marketplace />},
      {id: 5, path: '/nft/:id', element: <NFTpage />},
      {id: 6, path: '/rankings', element: <Rankings />},
      {id: 7, path: '/', element: <Home />},
   ];
   return (
      <Routes>
         {routeData.map(route => {
            return (
               <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
               />
            );
         })}
      </Routes>
   );
};

export default MainRoutes;
