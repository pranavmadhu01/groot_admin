const { default: axios } = require("axios");

const url = process.env.BACKEND_URL || "http://localhost:8000";
const fertilizerUrl = `${url}/fertilizer`;
const plantUrl = `${url}/plant`;
//fertilizer apis
const getAllFertilzers = async () => {
  return await axios.get(fertilizerUrl);
};
const addFertilizer = async (data) => {
  return await axios.post(fertilizerUrl, data);
};
export { getAllFertilzers, addFertilizer };

//plant apis
const addANewPlant = async (data) => {
  return await axios.post(plantUrl, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const getAllPlants = async () => {
  return await axios.get(plantUrl);
};
export { addANewPlant, getAllPlants };
