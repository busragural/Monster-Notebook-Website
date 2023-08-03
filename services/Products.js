
import axios from "axios";

export const getProducts = async (body) => {
    try {
        const response = await axios.post(process.env.API_URL_PRODUCTS, body, {
            headers: {
                'x-monster-client-channel': 'MobileAppTr',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': process.env.API_KEY_PRODUCTS,
            }
        })
        
      const bannersData = response.data
        
        //console.log("data", bannerData);
        // console.log("json", bannerData.length);
        return bannersData;

    } catch (error) {
        //console.error('Error:', error);
        // Handle error appropriately
        throw error;
    }


}