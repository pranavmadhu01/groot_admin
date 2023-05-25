const { default: axios } = require("axios");
const url = process.env.BACKEND_URL || "http://localhost:8000";
const fertilizerUrl = `${url}/fertilizer`;
const plantUrl = `${url}/plant`;
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
