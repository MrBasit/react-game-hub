// import useData from "./useData";
import Genres from "../data/Genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// let useGeners = () => useData<Genre>('/genres');
let useGeners = () => { return { data: Genres, error: '', isLoading: false } };
export default useGeners;