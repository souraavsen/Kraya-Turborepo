import { coreAxios } from 'utils';


export const handleFetchProductDetails = async (id?: number | string) => {
  try {
    const response = await coreAxios.get(`/product-details/${id}`);
    return response;
  } catch (error) {
    console.log("Errorr !!!", error);
  }
};
