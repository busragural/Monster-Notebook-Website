import { searchByName } from "@/helpers/ProductID";
import axios from "axios";

export const getProductBanner = async ({ params }) => {
  let id=searchByName(params.products);


  const body = {
    "bannerCode": 0,
    "productId": 0,
    "categoryId": id
  };
  try {
    const response = await axios.post(process.env.API_URL_DOUBLE_BANNER, body, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_DOUBLE_BANNER,
      }
    })
    const bannerData = response.data.data;
    //console.log("data", bannerData);
    // console.log("json", bannerData.length);
    return bannerData;

  } catch (error) {
    //console.error('Error:', error);
    // Handle error appropriately
    throw error;
  }


}