import React, { useState, useEffect } from "react";
import api from 'api';
import { resultsInterface, searchValueInterface } from 'interfaces';

const SearchResult: React.FC<{ searchValue: searchValueInterface }> = ({ searchValue }) => {

  const [results, setResults] = useState<resultsInterface[]>([]);

  useEffect(() => {
    const fetchImageData = async () => {
      console.log('searchValue', searchValue);
      const data = await api.getImagesData(searchValue);
      console.log('data', data);
      setResults(data.results);
    }

    fetchImageData();
  }, [searchValue])

  return (
    <div className="row images-container">
      {results.map((project) => (
        <div className="image col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={project.id}>
          <img
            src={project.urls.small}
            alt={project.alt_description}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchResult;

