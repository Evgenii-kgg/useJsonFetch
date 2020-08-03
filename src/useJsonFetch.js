import React, {useState, useEffect } from 'react';

function useJsonFetch(url, opts) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, opts);
        const json = await res.json();
        setData(json);
        setLoading(false)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

return {data, loading, error};
}

export default useJsonFetch;