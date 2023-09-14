export type FeaturedVendorT = {
  id: number;
  title: string;
  description: string;
  image: string;
  min_price: number;
  max_price: number;
  quantity: number;
  industry: string;
  rating: number;
  rating_quanity: number;
  region: string;
};

export type ProductPropsT = {
  item?: FeaturedVendorT;
  displayType?: string;
};

export type SectionsT = {
  title: string;
  component: any;
};

export type ReviewPropsT = {
  productReviews: any;
};

export type SortProductsPropsT = {
  query: string | null;
  displayType: string;
  setDisplayType: any;
};

export type RFQInfoFromPropsT = {
  expiryDate: string | null;
  setExpiryDate: any;
  handleChangeDate: any;
};
