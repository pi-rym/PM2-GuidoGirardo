const renderCards = require("./renderCards");
const axios = require("axios");

const fetchData = async ()=> {
    try{
        const data = await axios.get("https://students-api.2.us-1.fl0.io/movies");
        renderCards(data.data);
    }catch(e){
        console.log(e);
    }
}

fetchData();