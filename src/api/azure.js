import axios from 'axios';

//Microsoft azure cogninitive vision service
export default axios.create({
    baseURL: 'https://westcentralus.api.cognitive.microsoft.com/vision',
    headers: {
        //remeber to remove the api key when uploading to github
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '602a9bdf16194f4bbf60104eeb2a4827'
    }
});
