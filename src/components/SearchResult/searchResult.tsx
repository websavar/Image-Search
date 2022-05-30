import React from "react";
import { useFetchResults } from 'hooks/useFetchResults';

import {
  ImageDataInterFace,
  SearchValueInterface
} from 'interfaces';
import { Loader } from "components";

const SearchResult: React.FC<{ searchValue: SearchValueInterface }> = ({ searchValue }) => {

  const {
    data: results,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useFetchResults(searchValue)

  return isLoading ? (
    <Loader />
  ) : isError ? (
    <div>Error: {(error as Error).message}</div>
  ) : (
    <div className="row images-container">
      {results?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.data.map((image: ImageDataInterFace) => (
            <div
              className="image col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
              key={image.id}
            >
              <img
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          ))}
        </React.Fragment>
      ))}

      {hasNextPage &&
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary ms-2 col-2 mb-2"
            onClick={() => fetchNextPage()}
          >
            Load More
          </button>
        </div>
      }

      {isFetchingNextPage && <Loader />}
    </div>
  );
};

export default React.memo(SearchResult);

