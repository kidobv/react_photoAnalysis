import axios from 'axios';

//Microsoft azure cogninitive vision service
export default axios.create({
    baseURL: 'https://eastus.api.cognitive.microsoft.com/vision/v1.0/analyze',
    headers: {
        //remeber to remove the api key when uploading to github
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '6eda8989b29e4683a14d1f548e3505b0'
    }
});
