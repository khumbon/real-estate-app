export interface ListingType {
  id: number;
  guidePrice: number;
  numberOfBeds: number;
  numberOfBaths: number;
  numberOfReceps: number;
  description: string;
  address: string;
  location: { distance: number; place: string; type: string }[];
  pictures: ListingImages;
  floorPlans: ListingImages;
  realtor: {
    name: string;
    logo: string;
  };
  listedOn: string;
  status: statusOptions;
}

export type ListingImages = { src: string }[]


export enum statusOptions {
  active = 'active',
  expired = 'expired',
}
