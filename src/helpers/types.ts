export type nftPropsType = {
   image: string;
   title: string;
   creatorPic: string;
   creatorName: string;
   price?: number;
   highestBid?: number;
   priceShown: boolean;
};

export type colPropsType = {
   imgMain: string;
   imgSec: string;
   imgThird: string;
   colCounter: number;
   colName: string;
   creatorName: string;
   creatorPic: string;
};

export type creatorPropsType = {
   id: number;
   creatorPic: string;
   creatorName: string;
   totalSales: number;
};
