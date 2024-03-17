import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Collection = () => {
  const [collectionData, setCollectionData] = useState([]);
  const { symbol } = useParams();

  const fetchData = async () => {
    let response;
    try {
      if (symbol === "omb") {
        response = await fetch("/api/collections/1");
      } else {
        response = await fetch("/api/collections/2");
      }
      const data = await response.json();
      console.log(data);
      setCollectionData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol]);

  return (
    <div className="collection-wrapper">
      {collectionData.length > 0 &&
        collectionData.map((data) => (
          <div key={data.id} className="single">
            <img src={data.img}></img>
            <p>{data.inscription}</p>
            <p>{data.price} BTC</p>
          </div>
        ))}
    </div>
  );
};

export default Collection;
