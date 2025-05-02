const axios = require('axios');

const API_KEY = process.env.GNEWS_API_KEY; // replace with your API key
const BASE_URL = 'https://gnews.io/api/v4';

const fetchStartupNews = async () => {
    const query = 'startup OR startups OR tech funding OR technology OR funding OR venture capital OR mergers OR acquisitions';
    const url = `${BASE_URL}/search?q=${query}&lang=en&country=ca&max=70&apikey=${API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.articles || [];
    } catch (error) {
        console.error('Error fetching startup news:', error.message);
        throw new Error('Failed to fetch startup news');
    }
};

module.exports = { fetchStartupNews };
