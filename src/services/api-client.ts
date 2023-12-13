import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d165a5e2d0e04885a2ed0fbd097cb75a",
  },
});
