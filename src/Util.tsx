import axios from "axios";

const headers = {
    'Content-Type': 'application/json'
}
export const fetchPost = async (url:string,data:{}) => {
    try {
        return await axios.post(url,
            JSON.stringify(data),
            {
                headers: headers
            }
        );
    } catch (err) {
        console.log(err)
    }
}

