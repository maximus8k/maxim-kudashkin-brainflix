import axios from "axios";

const API_ADDRESS = 'https://project-2-api.herokuapp.com';
const CONFIG = {
	params: {
		api_key: "634cbf1e-345b-40d1-baf2-64286a1084b1",
	},
	headers: {
		"Content-Type": "application/json",
	},
};


export async function getDetails(id) {
	try {
		const res = await axios.get(API_ADDRESS + "/videos/" + id, CONFIG);
		return res.data;
	} catch (error) {
		console.error(error.response.data.message);
		return error.response;
	}
}


export async function getVideos() {
	try {
		const res = await axios.get(API_ADDRESS + "/videos", CONFIG);
		return res.data;
	} catch (error) {
		console.error(error.response.data.message);
		return error.response;
	}
}

