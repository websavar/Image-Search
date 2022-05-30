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
  pages: {
    data: ImageDataInterFace[]
    nextPage: number;
    totalPages: any
  }[]
}

export type SearchValueInterface = string | undefined;