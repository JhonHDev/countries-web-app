import { useCallback, useRef, useState } from 'react';

export const useFormSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef(null);

  const handleIputSearch = useCallback((e) => {
    e.preventDefault();
    setSearchValue(searchInputRef.current.value);
  }, []);

  return {
    searchValue,
    handleIputSearch,
    searchInputRef,
  };
};
