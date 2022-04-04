import axios from "axios";

const headers = {
    'Content-Type': 'application/json'
}
export const fetchPost = async (url:string,data:{}) => {
    try {
        const response = await axios.post(url,
            JSON.stringify(data),
            {
                headers: headers
            }
        );
        console.log(response)
        return response;
    } catch (err) {
        console.log(err)
    }
}

