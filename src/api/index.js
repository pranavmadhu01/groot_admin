const { default: axios } = require("axios");

const url = process.env.BACKEND_URL || "http://localhost:8000";
const fertilizerUrl = `${url}/fertilizer`;
//fertilizer apis
const getAllFertilzers = async () => {
  return await axios.get(fertilizerUrl);
};
const addFertilizer = async (data) => {
  return await axios.post(fertilizerUrl, data);
};
export { getAllFertilzers, addFertilizer };
