import React from "react";
import { useFetchResults } from 'hooks/useFetchResults';

import {
  ImageDataInterFace,
  SearchValueInterface
} from 'interfaces';

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
    <div>Loading...</div>
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
        <div className='btn-more'>
          <button onClick={() => fetchNextPage()}>
            Load More
          </button>
        </div>
      }

      {isFetchingNextPage && <div>Loading...</div>}
    </div>
  );
};

export default React.memo(SearchResult);

