'use client'

import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { CatBreedData, CatBreeds } from '../types/CatBreedApiTypes'

interface SearchBarProps {
  result: (results: CatBreedData[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ result }) => {
  const apiUrl = 'https://catfact.ninja/breeds';

  const [searchTerm, setSearchTerm] = useState('');
  const [fetchedData, setFetchedData] = useState<CatBreeds>();

  const fetchCatBreedsData = async () => {
    const response = await fetch(apiUrl);
    return await response.json();
  }

  useEffect(() => {
    fetchCatBreedsData().then((data) => setFetchedData(data));
  }, []);

  const handleChange = (value: string) => {
    setSearchTerm(value)
    if (fetchedData) {
      const results: CatBreedData[] = fetchedData.data.filter((data) => {
        return value && data.breed && data.breed.toLowerCase().includes(value)
      });
      result(results);
    }
  };

  return (
    <div className="w-full h-12 bg-gray-200 px-4 rounded-xl shadow-2xl flex items-center gap-3">
      <FaSearch className="fill-black" />
      <input
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
        className="w-full h-full bg-transparent focus:outline-none"
      />
    </div>
  )
}

export default SearchBar