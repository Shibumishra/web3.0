import React, { useState, useEffect } from "react";
import axios from "../../../Sec-pract/pract-app/node_modules/axios";

const Filter = () => {
  const [data, setdata] = useState([]);
  const [product, setProduct] = useState([]);


  useEffect(() => {
    console.log("Component Did Mount API");
    axios.get("https://api.edyoda.com/v1/blog/postcategories/").then((res) => {
      setdata(res.data);
    });
  }, []);


  useEffect(() => {
    console.log("Component Did Mount API");
    axios.get("https://60a004427ee1430017bf1440.mockapi.io/blog").then((res) => {
      setProduct(res.data);
    });
  }, []);

 const filterItem = (button) => {
   if(button === "All"){
     setProduct()
   }

   const filterData =  product.filter((currElem) => {
     return currElem.name === button;
   })
   setProduct(filterData)
 }

  return (
    <div>
      <div className="background">
      <h3 className="latest_posts">Latest Posts</h3>
      <div className="chatry">
        <img
          style={{ height: "3%", width: "3%" }}
          alt="Filter Icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00f
          r80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/
          oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/
          vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/
          fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/
          JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+
          mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+
          Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
        />
        <h4 className="filter_category">Filter by Category</h4>
      </div>
      <div className="filter_contar">
        <button className="all" onClick={() => setProduct(product)}>All</button>
        {data.length &&
          data.map(({ title, id, slug }) => (
            <div>
              <div key={id}>
              <button className="filted_data" onClick={() => filterItem(title)}>{title}</button>
              </div>
            </div>
          ))}
      </div>
      </div>

{/* //card -- OPEN*/}
<div className="bg">
      <div className="box">
        {product.length &&
          product.map(
            ({
              authorname,
              description,
              id,
              posted_on,
              slug,
              small_image,
              title,
              name
            }) => (
              <div>
                <div>
                  <div key={id} className="card">
                    <a href="https://www.edyoda.com/stories">
                      <img
                        class="image-dimensions"
                        src={small_image}
                        alt="apps"
                      />
                      <p className="title1">{title}</p>
                      <p className="authorname">
                        {authorname} |
                      </p>
                      <p class="description">{description}</p>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>

{/* //card -- END*/}

    </div>
  );
};

export default Filter;
