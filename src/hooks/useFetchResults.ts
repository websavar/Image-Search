import { useInfiniteQuery } from "react-query";

import api from 'api';
import { MaxPages } from 'constants/index';
import {
  SearchValueInterface,
  FetchResultsInterface
} from 'interfaces';

const fetchResults: FetchResultsInterface = async ({ pageParam = 1, queryKey }) => {
  const searchVal = queryKey[1];
  const data = await api.getImagesData(pageParam, searchVal);

  return {
    data: data.results,
    nextPage: pageParam + 1,
    totalPages: data.total_pages > MaxPages ? MaxPages : data.total_pages
  };
};

export const useFetchResults = (searchValue: SearchValueInterface) => {
  return useInfiniteQuery(["photos", searchValue],
    fetchResults,
    {
      getNextPageParam(lastPage) {
        return lastPage.nextPage < lastPage.totalPages
          ? lastPage.nextPage
          : undefined;
      }
    });
}