import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "./Api";

const Test = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "http://localhost:1337/api/restaurants?populate=banner_image"
      );

      setBannerData(request.data.data);
      console.log(
        request.data.data[0].attributes.banner_image.data.attributes.url
      );
    }
    fetchData();
  }, []);

  return (
    <div>
      {bannerData.map((rests) => (
        <div>{rests.attributes.banner_image.data.attributes.url}</div>
      ))}
    </div>
  );
};

export default Test;
