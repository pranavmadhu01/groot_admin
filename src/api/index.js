const { default: axios } = require("axios");
const url = process.env.BACKEND_URL || "http://localhost:8000";
const fertilizerUrl = `${url}/fertilizer`;
const diseaseUrl = `${url}/disease`;

//fertilizer apis
const getAllFertilzers = async () => {
  return await axios.get(fertilizerUrl);
};
const addFertilizer = async (data) => {
  return await axios.post(fertilizerUrl, data);
};

//disease apis
const getAllDiseases = async () => {
  return await axios.get(diseaseUrl);
};
const addDisease = async (data) => {
  return await axios.post(diseaseUrl, data);
};

export { getAllFertilzers, addFertilizer, getAllDiseases, addDisease };
