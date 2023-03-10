import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

/* 
    Note that there is a bug in the if (!jsonValue) return JSON.parse(jsonValue); 
    condition - it should be if (jsonValue) return JSON.parse(jsonValue); instead, 
    otherwise the hook will always return the defaultValue even if a value exists 
    in localStorage.
    */
// if (!jsonValue) return JSON.parse(jsonValue);
