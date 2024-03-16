"use client";
import ImagePost from "@/components/ImagePost";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Images = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <h1 className="text-4xl">Images</h1>
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <div className="">
            <div>
              <div className="flex items-center justify-center h-screen bg-gray-200">
                <div className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-10 w-10 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0112 4v4c-3.86 0-7 3.14-7 7h4zm1.373 2A8 8 0 0012 20v-4c1.299 0 2.511-.324 3.596-.892L11.373 19z"
                    ></path>
                  </svg>
                  <span className="text-lg text-gray-800">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          data.map((i) => <ImagePost  key={i.id} data={i} />)
        )}
      </div>
    </div>
  );
};

export default Images;
