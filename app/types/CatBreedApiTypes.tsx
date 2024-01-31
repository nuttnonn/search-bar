export interface CatBreedData {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export interface CatBreedLinks {
  url: string | null;
  label: string;
  active: boolean;
}

export interface CatBreeds {
  current_page: number;
  data: CatBreedData[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: CatBreedLinks[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}