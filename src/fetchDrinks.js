import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json(); // .json returns promise
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
