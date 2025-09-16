import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cf9b9ec940bf485584f5cbc821f3ec8b",
  },
});
