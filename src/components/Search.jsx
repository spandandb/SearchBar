import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

export default function Search(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  const options = filteredData.slice(0, 10).map((country) => (
    <p
      key={country.name}
      name={country.name}
      className='py-2 px-0 border-b-2 hover:bg-gray-200'
      onClick={() => {
        optionSelect(country.name);
      }}
    >
      {country.name}
    </p>
  ));

  const optionSelect = (countryName) => {
    setSearchWord(countryName);
    setFilteredData([]);
  };

  const handleFilter = (event) => {
    const wordEntered = event.target.value;
    setSearchWord(wordEntered);
    const newFilter = props.response.data.filter((country) => {
      return country.name.toLowerCase().includes(wordEntered.toLowerCase());
    });
    if (wordEntered === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleReset = () => {
    setFilteredData([]);
    setSearchWord('');
  };
  const doNothing = () => {};

  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <div className='flex'>
        <input
          type='text'
          placeholder={props.placeholder}
          className='py-3 px-5 w-72 rounded-l-lg'
          value={searchWord}
          onChange={handleFilter}
        />
        <div
          className={`bg-white w-fit py-3 px-2 border-l-2 border-gray-600 rounded-r-lg ${
            searchWord.length === 0
              ? 'hover:bg-green-500 hover:text-white hover:border-white'
              : 'hover:bg-red-600 hover:text-white hover:border-white'
          }`}
          onClick={searchWord.length !== 0 ? handleReset : doNothing}
        >
          {searchWord.length === 0 ? (
            <BsSearch
              size={20}
              className='hover:bg-green-500 hover:text-white'
            />
          ) : (
            <AiOutlineClose
              size={21}
              className='hover:bg-red-600 hover:text-white'
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className='bg-white w-[23%] h-48 text-center overflow-hidden overflow-y-auto m-0 no-scrollbar rounded-lg mt-1'>
          {options}
        </div>
      )}
    </div>
  );
}
