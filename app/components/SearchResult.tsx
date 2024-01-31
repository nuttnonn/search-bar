import React from 'react'
import { CatBreedData } from '../types/CatBreedApiTypes'

interface SearchResultProps {
  result: CatBreedData;
  selected: (result: CatBreedData) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ result, selected }) => {
  return (
    <button
      className="w-full h-full text-start px-4 py-2 hover:bg-[#c0c0c0]"
      onClick={() => selected(result)}
    >
      {result.breed}
    </button>
  )
}

export default SearchResult