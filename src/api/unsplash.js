import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        //remeber to remove the api key when uploading to github
        Authorization: 'MY_API_KEY'
    }
});
