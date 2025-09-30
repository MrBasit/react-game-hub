import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.service";
import type { DataResponse } from "./useData";
import platforms from "../data/Platforms";
// import platforms from "../data/Platforms";

interface Platform {
  id: number,
  name: string,
  slug: string,

}
export default function usePlatform() {
  let queryPlatform = useQuery({
    queryKey: ['platforms'],
    queryFn: () => {
      return apiClient.get<DataResponse<Platform>>('/platforms/lists/parents').then(Response => Response.data)
    },
    staleTime: 24 * 60 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms }
  })
  return queryPlatform;
  // return useData<Platform>('/platforms/lists/parents')
  // return { data: platforms, error: '', isLoading: false }
}