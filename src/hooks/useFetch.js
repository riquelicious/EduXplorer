import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [url]);
  return { data, error };
}

function useRequest() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRequest = async (url, method = "GET", payload = null) => {
    setLoading(true);
    setError(null);
    try {
      const options = {
        method,
        headers: { "Content-Type": "application/json" },
      };
      if (method === "POST") {
        options.body = JSON.stringify(payload);
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network error");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchRequest };
}

export { useFetch, useRequest };
