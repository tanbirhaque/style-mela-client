"use client";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
import "./Product_info_tab.css";
import Markdown from "react-markdown";
import Review from "../Review/Review";

const Product_info = ({ productID }: any) => {
  const [description, setDescription] = useState();
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
        setDescription(data.description);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, [productID]);

  console.log(description);

  return (
    <div>
      <div>
        <Tabs>
          <TabList
            className={`bg-black rounded-t-[20px] flex justify-center gap-5 text-[18px]`}
          >
            <Tab className={`text-white py-5 px-5 cursor-pointer`}>
              Description
            </Tab>
            <Tab className={"text-white py-5 px-5 cursor-pointer"}>Reviews</Tab>
          </TabList>

          <div className="bg-[#f5f5f5]">
            <div className="max-w-[1200px] mx-auto py-[60px]">
              {/* Description here */}
              <TabPanel>
                <div>
                  <div>
                    <h2 className="font-jost font-bold text-[30px]">
                      Game Console Controller Cable
                    </h2>
                  </div>
                  <div className="mt-8">
                    <Markdown>{description}</Markdown>
                  </div>
                </div>
              </TabPanel>
              {/* Reviews here */}
              <TabPanel>
                {/* <h2>Any content 2</h2> */}
                <Review />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Product_info;
