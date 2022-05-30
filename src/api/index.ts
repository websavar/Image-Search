import { HTTP_METHODS } from "constants/enums";
import { createApiRequest } from "./axios";

const clientId = process.env.REACT_APP_CLIENT_ID;
const errorHandler = (e: any) => console.log(`Error occurred while fetching data from the server ${e}`);

class ApiCallCreator {
  getImagesData(page: string, imageQuery: string) {
    return createApiRequest(
      `/search/photos?
      page=${page}&
      query=${imageQuery}&
      client_id=${clientId}`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res.data)
      .catch((e) => errorHandler(e));
  }
}

const api = new ApiCallCreator();

export default api;