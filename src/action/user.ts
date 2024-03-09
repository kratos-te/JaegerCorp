import axios from "axios";
import { API_URL } from "@/config";
import { RaidType } from "@/type";

export async function getUserInfo(walletKey : String) {
    try {
      const res = await axios.get(`${API_URL}/api/users/${walletKey}`)
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