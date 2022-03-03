import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "../../Sec-pract/pract-app/node_modules/axios";

const Navbar = () => {
  const [data, setdata] = useState([]);
 

  useEffect(() => {
    console.log("Component Did Mount API");
    axios.get("https://api.edyoda.com/v1/blog/postcategories/").then((res) => {
      setdata(res.data);
    });
  }, []);



 
  return (
    <div>
      <div className="topbar">
        <div className="logo">
          <a href="https://www.edyoda.com/stories" target="_blank">
            <span className="menu-items"> EDYODA</span>
            <span>
              <p className="under-logo">Stories</p>
            </span>
          </a>
        </div>
        <div className="explore">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Explore Categories
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {data.length &&
                data.map(({ title, id}) => (
                  <div key={id}>
                    <li>
                      <a className="dropdown-item" href="#">
                        {title}
                      </a>
                    </li>
                  </div>
                ))}
            </ul>
          </div>
        </div>
        <div className="about">
          <p>
            EdYoda is free learning and knowledge sharing platform for techies
          </p>
        </div>
        <div className="btn">
          <a href="https://www.edyoda.com/stories">Go To Main Website</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
