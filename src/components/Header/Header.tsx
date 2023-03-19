import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';
import burgerMenuIcon from './burger-menu-icon.svg';

const Header = () => {
   const navigate = useNavigate();
   const [isNavOpen, setIsNavOpen] = useState(false);
   const menu = [
      {id: 1, name: 'Marketplace', path: '/marketplace'},
      {id: 2, name: 'Rankings', path: '/rankings'},
      {id: 3, name: 'Connect a wallet', path: '/connect-wallet'},
   ];
   return (
      <header className="container flex mx-auto items-center justify-between px-10 lg:px-0 py-4">
         <a href="/">
            <img src={logo} alt="logo" />
         </a>
         <nav>
            <section className="MOBILE-MENU flex lg:hidden">
               <div
                  className="HAMBURGER-ICON space-y-2"
                  onClick={() => setIsNavOpen(prev => !prev)}
               >
                  <img src={burgerMenuIcon} />
               </div>

               <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                  <div
                     className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                     onClick={() => setIsNavOpen(false)}
                  >
                     <svg
                        className="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                     </svg>
                  </div>
                  {/* <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                     {menu.map(menuItem => {
                        return (
                           <li
                              key={menuItem.id}
                              className="border-b border-gray-400 my-8 uppercase"
                           >
                              <Link to={menuItem.path}>{menuItem.name}</Link>
                           </li>
                        );
                     })}
                  </ul> */}
               </div>
            </section>

            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center">
               {menu.map(menuItem => {
                  return (
                     <li key={menuItem.id}>
                        <Link to={menuItem.path}>{menuItem.name}</Link>
                     </li>
                  );
               })}
               <li>
                  <button
                     className="btn-solid"
                     onClick={() => {
                        navigate('/create-account');
                     }}
                  >
                     Sign up
                  </button>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
