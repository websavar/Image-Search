import React from "react";
import { useInfiniteQuery } from "react-query";

import { MaxPages } from 'constants/index';

import api from 'api';
import { ImageDataInterFace, resultsInterface, SearchValueInterface } from 'interfaces';

const SearchResult: React.FC<{ searchValue: SearchValueInterface }> = ({ searchValue }) => {

  const fetchResults = async ({ pageParam = 1 }) => {
    const data = await api.getImagesData(pageParam, searchValue);
    console.log("data", data, pageParam);

    return {
      data: data.results,
      nextPage: pageParam + 1,
      totalPages: data.total_pages > MaxPages ? MaxPages : data.total_pages
    };
  };

  const {
    data: results,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(["photos", searchValue],
    fetchResults,
    {
      getNextPageParam(lastPage) {
        return lastPage.nextPage < lastPage.totalPages
          ? lastPage.nextPage
          : undefined;
      }
    });

  console.log("results", results);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="row images-container">

      {results?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.data.map((image: ImageDataInterFace) => (
            <div className="image col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={image.id}>
              <img
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          ))}
        </React.Fragment>
      ))}

      <div className='btn-more'>
        <button onClick={() => fetchNextPage()}>
          Load More
        </button>
      </div>

      {isFetchingNextPage && <div>Loading...</div>}
    </div>
  );
};

export default React.memo(SearchResult);

