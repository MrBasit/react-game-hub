import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.service";
import type { QueryObject } from "../stores/queryStore";
import type { Game } from "../entities/Game";

let apiClient = new APIClient<Game>('/games');
function useGames(query: QueryObject) {
  let queryGames = useInfiniteQuery({
    queryKey: ['games', query],
    queryFn: ({ pageParam = 0 }) => apiClient.getAll({
      params: {
        genres: query?.GenreId,
        parent_platforms: query?.PlatformId,
        ordering: query?.Sort?.value,
        search: query.SearchText,
        page_size: 10,
        page: pageParam
      }
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => { return lastPage.next ? allPages.length + 1 : undefined }
  })

  return queryGames;

  // return useData<Game>('/games', [query],
  //   {
  //     params: {
  //       genres: query?.Genre?.id,
  //       parent_platforms: query?.Platform?.id,
  //       ordering: query?.Sort?.value,
  //       search: query.SearchText
  //     }
  //   });

}

export default useGames;