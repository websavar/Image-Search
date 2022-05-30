export interface ImageDataInterFace {
  id: string
  alt_description: string
  urls: {
    small: string
    full: string
    thumb: string
  }
}

export interface resultsInterface {
  data: ImageDataInterFace[]
  nextPage: number;
  totalPages: any
}

export interface FetchResultsInterface {
  ({ pageParam, queryKey }: { pageParam?: number | undefined, queryKey: any }
  ): Promise<resultsInterface>
}

export type SearchValueInterface = string | undefined;