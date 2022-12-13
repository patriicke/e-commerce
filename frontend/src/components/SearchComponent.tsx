import React from "react";

const SearchComponent: React.FC<{ setSearchQuery: Function }> = ({
  setSearchQuery
}) => {
  return (
    <div className='h-[5vh] w-full my-5'>
      <input
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        placeholder='Search a product here ...'
        className='border outline-none px-3 py-2 w-[20em] rounded-md'
      />
    </div>
  );
};

export default SearchComponent;
