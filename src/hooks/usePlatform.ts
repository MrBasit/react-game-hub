import { useQuery } from "@tanstack/react-query";
import platforms from "../data/Platforms";
import APIClient from "../services/api-client.service";
import type { Platform } from "../entities/Platform";
// import platforms from "../data/Platforms";

let apiclient = new APIClient<Platform>('/platforms/lists/parents');

export default function usePlatform() {
  let queryPlatform = useQuery({
    queryKey: ['platforms'],
    queryFn: apiclient.getAll,
    staleTime: 24 * 60 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms, next: null }
  })
  return queryPlatform;
  // return useData<Platform>('/platforms/lists/parents')
  // return { data: platforms, error: '', isLoading: false }
}