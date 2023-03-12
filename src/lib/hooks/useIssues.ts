import {useInfiniteQuery} from 'react-query';
import {getIssues} from '../api/getIssues';

export function useIssues() {
  return useInfiniteQuery(
    [`issues`],
    ({pageParam = 1}) =>
      getIssues({
        page: pageParam,
      }),
    {
      getNextPageParam: (response, pages) => {
        return pages.length + 1;
      },
    },
  );
}
