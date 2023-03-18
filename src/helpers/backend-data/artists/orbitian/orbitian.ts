import creatorPic from './Avatar Placeholder.png';
import image1 from './Image PlaceHolder.png';
import image2 from './Image PlaceHolder-1.png';
import image3 from './Image PlaceHolder-2.png';
import image4 from './Image PlaceHolder-3.png';
import image5 from './Image PlaceHolder-4.png';
import image6 from './Image PlaceHolder-5.png';
import image7 from './Image PlaceHolder-6.png';
import image8 from './Image PlaceHolder-7.png';
import image9 from './Image PlaceHolder-8.png';

export function getNft(id: any): any {
   let res = orbitianNfts.find(nft => {
      return id === nft.id;
   });
   return res;
}
export const orbitianNfts = [
   {
      image: image1,
      title: 'The Orbitians',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 1,
      dateMinted: 'Sep 30, 2022',
      desc: "The Orbitians\nis a collection of 10,000 unique NFTs on the Ethereum blockchain,\n\n There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on Earth.\nThese Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.",
      details: {etherscan: '', original: ''},
      tags: ['animation', 'illustration', 'moon'],
   },
   {
      image: image2,
      title: 'Foxy Life',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 2,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
   {
      image: image3,
      title: 'Cat From Future',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 3,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
   {
      image: image4,
      title: 'Psycho Dog',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 4,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
   {
      image: image5,
      title: 'Designer Bear',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 5,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
   {
      image: image6,
      title: 'Dancing Robot 0375',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 6,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
   {
      image: image7,
      title: 'Dancing Robot 0356',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 7,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
   {
      image: image8,
      title: 'Dancing Robot 0321',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 8,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
   {
      image: image9,
      title: 'Dancing Robot 0512',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 9,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
   {
      image: image9,
      title: 'Dancing Robot 0512',
      creatorPic: creatorPic,
      creatorName: 'Orbitian',
      price: 1.75,
      highestBid: 0.55,
      id: 10,
      dateMinted: '',
      desc: '',
      details: {etherscan: '', original: ''},
      tags: [],
   },
];
