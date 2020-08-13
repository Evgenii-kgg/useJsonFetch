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
        setError(res.ok) // status !== 2xx
        const json = await res.json();
        setData(json);
        setLoading(false)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [url]);

return [data, loading, error];
}

export default useJsonFetch;