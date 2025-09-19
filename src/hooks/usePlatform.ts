import useData from "./useData";
// import platforms from "../data/Platforms";

interface Platform {
  id: number,
  name: string,
  slug: string,

}
export default function usePlatform() {
  return useData<Platform>('/platforms/lists/parents')

  // return { data: platforms, error: '', isLoading: false }
}