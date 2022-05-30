export interface resultsInterface {
  alt_description: string
  id: string
  urls: {
    small: string
    full: string
    thumb: string
  }
}

export type searchValueInterface = string | undefined;