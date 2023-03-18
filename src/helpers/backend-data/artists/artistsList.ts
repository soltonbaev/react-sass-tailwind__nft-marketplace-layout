import avatar1 from './media/1.png';
import avatar2 from './media/Avatar Placeholder.png';
import avatar3 from './media/Avatar Placeholder.png';
import avatar4 from './media/Avatar Placeholder.png';
import avatar5 from './media/Avatar Placeholder.png';
import avatar6 from './media/Avatar Placeholder.png';
import avatar7 from './media/Avatar Placeholder.png';
import avatar8 from './media/Avatar Placeholder.png';
import avatar9 from './media/Avatar Placeholder.png';
import avatar10 from './media/Avatar Placeholder.png';
import avatar11 from './media/Avatar Placeholder.png';
import avatar12 from './media/Avatar Placeholder.png';
import avatar13 from './media/Avatar Placeholder.png';
import avatar14 from './media/Avatar Placeholder.png';
import avatar15 from './media/Avatar Placeholder.png';
import avatar16 from './media/Avatar Placeholder.png';
import avatar17 from './media/Avatar Placeholder.png';
import avatar18 from './media/Avatar Placeholder.png';
import avatar19 from './media/Avatar Placeholder.png';
import avatar20 from './media/Avatar Placeholder.png';
import cover1 from './media/coverImage1.png';

export function getArtist(id: any): any {
   let res = artistList.find(artist => {
      return id === artist.id;
   });
   console.log('artist res', res);
   return res;
}

export function getAllArtists(): any {
   return artistList.map(artist => artist);
}

export const artistList = [
   {
      icon: avatar1,
      id: 1,
      name: 'AnimaKid',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: "The internet's friendliest designer kid",
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
      coverImage: cover1,
   },
   {
      icon: avatar2,
      id: 2,
      name: 'Jaydon Ekstrom Bothman',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar20,
      id: 3,
      name: 'Ruben Carder',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar3,
      id: 4,
      name: 'Alfredo Septimus',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar4,
      id: 5,
      name: 'Davis Franci',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar5,
      id: 6,
      name: 'Livia Rosser',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar6,
      id: 7,
      name: 'Kianna Donin',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar7,
      id: 8,
      name: 'Phillip Lipshutz',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar8,
      id: 9,
      name: 'Maria Rosser',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar9,
      id: 10,
      name: 'Kianna Stanton',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar10,
      id: 11,
      name: 'Angel Lubin',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar11,
      id: 12,
      name: 'Allison Torff',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar12,
      id: 13,
      name: 'Davis Workman',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar13,
      id: 14,
      name: 'Lindsey Lipshutz',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar14,
      id: 15,
      name: 'Randy Carder',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar15,
      id: 16,
      name: 'Lydia Culhane',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar16,
      id: 17,
      name: 'Rayna Bator',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar17,
      id: 18,
      name: 'Jocelyn Westervelt',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar18,
      id: 19,
      name: 'Marilyn Torff',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
   {
      icon: avatar19,
      id: 20,
      name: 'Skylar Levin',
      change: 1.25,
      nftsSold: 50,
      volume: 250,
      followers: 3000,
      bio: '',
      links: {webSite: '', discord: '', youtube: '', twitter: ''},
      walletAddress: '0xc0E3...B79C',
   },
];
