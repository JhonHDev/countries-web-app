import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCountriesFoundByName } from '../actions/countriesActions';

const useForm = (initialState = {}) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialState);

  const { searchValue } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  useEffect(() => {
    dispatch(getCountriesFoundByName(searchValue));
  }, [searchValue, dispatch]);

  return {
    formValues,
    handleInputChange,
    handleSubmit,
  };
};

export default useForm;
