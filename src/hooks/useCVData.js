import { useState, useEffect } from 'react';
import cvData from '../data/cv-data.json';

const useCVData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setData(cvData);
    setLoading(false);
  }, []);

  return { data, loading, error };
};

export default useCVData;
