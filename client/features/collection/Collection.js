import React from "react";
import { useState, useEffect } from "react";

const Collection = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/collections/1");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default Collection;
