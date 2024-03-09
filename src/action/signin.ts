import axios from "axios";
import { API_URL } from "@/config";


export async function sign(publicKey: string, twitterName: string , twitterImageURI: string, twitterEmail: string ) {
  try {
    const res = await axios.post(`${API_URL}/api/register/user`, {
      wallet: publicKey,
      twitterName: twitterName,
      twitterImageURI: twitterImageURI,
      twitterEmail: twitterEmail,
    });
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
