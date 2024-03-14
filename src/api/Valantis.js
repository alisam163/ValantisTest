import axios from 'axios';
import md5 from 'md5';

const apiUrl = 'https://api.valantis.store:41000/';
const password = 'Valantis';

const createAuthHeader = () => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const authString = `${password}_${timestamp}`;
  const authHeaderValue = md5(authString);
  return { 'X-Auth': authHeaderValue };
};

const authHeader = createAuthHeader();


const getList = async (offset, limit) => {
    const request = {
            action: 'get_ids',
            params: { "offset": offset, "limit": limit }
        }
        try {
            const res = await axios.post(apiUrl, request, {headers: authHeader})
            return res
        } catch (error) {
            console.error(error);
            getList(offset, limit)
        }
    }

const getItems = async(item_id) => {
    const request = {
        action: "get_items",
        params: {"ids": item_id}
    }
    try {
        const res = await axios.post(apiUrl, request, {headers: authHeader})
        return res
    } catch (error){
        console.error(error);
        getItems(item_id)
    }
}

const getFields = async (field, offset, limit) => {
    const request = {
        action: "get_fields",
        params: {"field": field, "offset": offset, "limit": limit}
    }
    const res = await axios.post(apiUrl, request, {headers: authHeader})
    return res
}

const getFilterItem = async (text) => {
    console.log('text', text);
    const request = {
        action: "filter",
        params: {"product": text}
    }
    try {
        const res = await axios.post(apiUrl, request, { headers: authHeader});
        return res.data; 
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        throw error; 
    }
}
 
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}



export {
    getList, 
    getItems,
    getFields,
    getFilterItem
}