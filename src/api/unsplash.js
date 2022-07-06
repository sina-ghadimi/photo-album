import axios from "axios";

const KEY = "Your KEY Here";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${KEY}`,
  },
});
