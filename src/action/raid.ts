import axios from "axios";
import { API_URL } from "@/config";
import { RaidType } from "@/type";

export async function register(raid: RaidType) {
  try {
    const res = await axios.post(`${API_URL}/api/register/raid`, raid);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors (e.g., network issues, 4xx/5xx responses) here
      console.error(`Axios Error: ${error.message}`);
    } else {
      // Handle other errors (e.g., JSON parsing errors, unexpected errors) here
      console.error(error);
    }
    return null; // Return
  }
}

export async function getRaids() {
  try {
    const res = await axios.get(`${API_URL}/api/raids`)
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors (e.g., network issues, 4xx/5xx responses) here
      console.error(`Axios Error: ${error.message}`);
    } else {
      // Handle other errors (e.g., JSON parsing errors, unexpected errors) here
      console.error(error);
    }
    return null; // Return
  }
}

export async function getOneRaid(id : String) {
  try {
    const res = await axios.get(`${API_URL}/api/raids/${id}`)
    console.log("res", res)
    return res
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors (e.g., network issues, 4xx/5xx responses) here
      console.error(`Axios Error: ${error.message}`);
    } else {
      // Handle other errors (e.g., JSON parsing errors, unexpected errors) here
      console.error(error);
    }
    return null; // Return
  }
}

export async function updateRaid(id : String, data: Array<String>) {
  try {
    const res = await axios.put(`${API_URL}/api/raids/${id}`, data)
    return res
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors (e.g., network issues, 4xx/5xx responses) here
      console.error(`Axios Error: ${error.message}`);
    } else {
      // Handle other errors (e.g., JSON parsing errors, unexpected errors) here
      console.error(error);
    }
    return null; // Return
  }
}

