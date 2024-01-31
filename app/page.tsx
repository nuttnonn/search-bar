'use client'

import SearchBar from './components/SearchBar'
import { useState } from 'react'
import { CatBreedData } from './types/CatBreedApiTypes'
import SearchResultsList from './components/SearchResultsList'

export default function Home() {
  const [results, setResults] = useState<CatBreedData[]>([]);

  return (
    <main className="w-screen h-screen p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">
        Cat Breed Search
      </h1>
      <div className="w-[50%] max-w-[450px] px-6 py-10 rounded-2xl text-black bg-[#d6d6d6] flex flex-col items-center gap-3">
        <SearchBar result={setResults} />
        <SearchResultsList results={results} selected={(select) => console.log(select.breed)} />
      </div>
    </main>
  );
}
