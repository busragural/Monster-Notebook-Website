import axios from "axios";

export const getChildData = async () => {

  try {
    const response = await axios.get(process.env.API_URL_CATEGORIES_CHILD, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_CATEGORIES_CHILD
      }
    });

    const bannerData = response.data.data;
    // console.log("data", bannerData);
    // console.log("json", bannerData.length);
    return bannerData;
  } catch (error) {
    console.error('Error:', error);
  
    throw error;
  }
};



export const getParentData = async () => {
  
  try {
    const response = await axios.get(process.env.API_URL_CATEGORIES, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_CATEGORIES
      }
    });

    const bannerData = response.data.data;
    // console.log("data", bannerData);
    // console.log("json", bannerData.length);
    return bannerData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

