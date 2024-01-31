import React from 'react'
import { CatBreedData } from '../types/CatBreedApiTypes'
import SearchResult from './SearchResult'

interface SearchResultsListProps {
  results: CatBreedData[];
  selected: (selected: CatBreedData) => void;
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results, selected }) => {
  return (
    <div className="w-full max-h-[280px] rounded-xl shadow-2xl bg-gray-200 flex flex-col overflow-y-scroll">
      {results.map((result, id) => {
        return <SearchResult key={id} result={result} selected={selected} />
      })}
    </div>
  )
}

export default SearchResultsList