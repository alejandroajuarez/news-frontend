  import axios from "axios";
  import { NewsIndex } from "./NewsIndex";
  import { useState, useEffect } from "react";

  export function NewsPage() {
  
  const [news, setNews] = useState([]);

  const getData = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/articles.json").then(response => {
      console.log(response.data);
      setNews(response.data);
    });
  };

  useEffect(getData, []);

  return (
    <main>
      <NewsIndex news={news} />
    </main>
  );
}