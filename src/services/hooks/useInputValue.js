import {useState} from 'react';

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = text => setValue(text);
  return {value, onChange};
};
