import { createApiRequest } from "./axios";
import { HTTP_METHODS } from "constants/enums";
import { PerPage } from "constants/index";
import { SearchValueInterface } from 'interfaces';

const clientId = process.env.REACT_APP_CLIENT_ID;

const errorHandler = (e: any) => console.log(`Error occurred while fetching data from the server ${e}`);

class ApiCallCreator {
  getImagesData(pageParam: number, searchValue: SearchValueInterface) {
    return createApiRequest(
      `/search/photos?page=${pageParam}
      &query=${searchValue}
      &per_page=${PerPage}
      &client_id=${clientId}`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res)
      .catch((e) => errorHandler(e));
  }
}

const api = new ApiCallCreator();

export default api;