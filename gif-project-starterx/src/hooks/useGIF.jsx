import { useState, useEffect } from "react";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGIF()
{
  const [GIF, setGIF] = useState("");
  const [Spinner, SetSpinner] = useState(false);

  async function fetchGIF(Type) {
    try {
      SetSpinner(true);
      const { data } = await axios.get(Type !== '' ? `${URL}&tag=${Type}` : URL);
      const gifURL = data.data.images.downsized_large.url;
      console.log(gifURL);
      setGIF(gifURL);
      SetSpinner(false);
    }
    catch (error) {
      console.error("Error fetching GIF:", error);
    }
  }

  useEffect(() => {
    fetchGIF();
  }, []);

  return {GIF, fetchGIF, Spinner};
}