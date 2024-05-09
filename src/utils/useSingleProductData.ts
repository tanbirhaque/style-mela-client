"use client";
import { useState, useEffect } from "react";

export const useSingleProductData = (productID) => {
  //   const [description, setDescription] = useState(null);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/single-product/${productID}`,
          {
            method: "GET",
          }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productID]);

  return { productData, loading, error };
};
