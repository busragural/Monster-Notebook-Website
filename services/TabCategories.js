import axios from "axios";
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
    //  console.log("data", bannerData);
    //  console.log("json", bannerData.length);
    return bannerData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const getGamePCs = async () => {
  
  try {
    const response = await axios.get(process.env.API_URL_GAMEPC, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_CATEGORIES
      }
    });

    const bannerData = response.data.data;
    //  console.log("data", bannerData);
    //  console.log("json", bannerData.length);
    return bannerData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getWorkPCs = async () => {
  
  try {
    const response = await axios.get(process.env.API_URL_WORKPC, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_CATEGORIES
      }
    });

    const bannerData = response.data.data;
    //  console.log("data", bannerData);
    //  console.log("json", bannerData.length);
    return bannerData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const getWorkStations = async () => {
  
  try {
    const response = await axios.get(process.env.API_URL_WORKSTA, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_CATEGORIES
      }
    });

    const bannerData = response.data.data;
    //  console.log("data", bannerData);
    //  console.log("json", bannerData.length);
    return bannerData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getAksesuar = async () => {
  
  try {
    const response = await axios.get(process.env.API_URL_AKSESUAR, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_CATEGORIES
      }
    });

    const bannerData = response.data.data;
    //  console.log("data", bannerData);
    //  console.log("json", bannerData.length);
    return bannerData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getMonitor = async () => {
  
  try {
    const response = await axios.get(process.env.API_URL_MONITOR, {
      headers: {
        'x-monster-client-channel': 'MobileAppTr',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY_CATEGORIES
      }
    });

    const bannerData = response.data.data;
    //  console.log("data", bannerData);
    //  console.log("json", bannerData.length);
    return bannerData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};