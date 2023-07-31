import axios from "axios";

export const getAbraFilter = async ({ params }) => {
  let id = 0;
  if (params.products === "Abra") {
    id = 6823
  } else if (params.products === "Tulpar") {
    id = 6826
  }
  else if (params.products === "Semruk") {
    id = 6829
  }
  else if (params.products === "Markut") {
    id = 6831
  }
  else if (params.products === "Huma") {
    id = 6833
  }
  else if (params.products === "Oyuncu%20Mouse") {
    id = 1666
  }


  const body = {
    "catId": id

  };
  try {
    const response = await axios.post(process.env.API_URL_FILTERS, body, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_FILTERS,
      }
    })
    const bannerData = response.data.data;
    //console.log("data", bannerData);
    // console.log("json", bannerData.length);
    return bannerData;

  } catch (error) {
    console.error('Error:', error);
    // Handle error appropriately
    throw error;
  }


}