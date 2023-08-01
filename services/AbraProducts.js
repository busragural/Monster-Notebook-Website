import { getID, searchByName } from "@/helpers/ProductID";
import axios from "axios";

export const getAbraProducts = async ({ params }) => {
    console.log("product sayfasi: ", params.products)
    let id=searchByName(params.products);


    

    const body = {
        "searchText": "",
        "categoryId": id,
        "filters": [""],
        "sortType": "",
        "page": 0,
        "pageSize": 50
    }
    try {
        const response = await axios.post(process.env.API_URL_PRODUCTS, body, {
            headers: {
                'x-monster-client-channel': 'MobileAppTr',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': process.env.API_KEY_PRODUCTS,
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