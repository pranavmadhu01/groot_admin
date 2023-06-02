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
const addNewDiseases = async (data, plant_id) => {
  return await axios.post(`${diseaseUrl}/${plant_id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { getAllFertilzers, addFertilizer, getAllDiseases, addNewDiseases };

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
const getPlant = async (plant_id) => {
  return await axios.get(`${plantUrl}/${plant_id}`);
};
const deletePlant = async (plant_id) => {
  return await axios.delete(`${plantUrl}/delete/${plant_id}`);
};
const updatePlant = async (plant_id, data) => {
  console.log("Update", data);
  return await axios.put(`${plantUrl}/update/${plant_id}`, data);
};
const addPlantTimeline = async (plant_id, data) => {
  return await axios.post(`${plantUrl}/addtimeline/${plant_id}`, {
    timeline: data,
  });
};
const getPlantTimeline = async (plant_id) => {
  return await axios.get(`${plantUrl}/timeline/${plant_id}`);
};

export {
  addANewPlant,
  getAllPlants,
  getPlant,
  deletePlant,
  updatePlant,
  addPlantTimeline,
  getPlantTimeline,
};
