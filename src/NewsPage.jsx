  import axios from "axios";
  import { NewsIndex } from "./NewsIndex";
  import { GitHubProfile } from "./GitHubProfile";
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

  const handleOAuth = () => {
    console.log("handling Auth");
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      console.log("get access token");
      axios.get("http://localhost:3000/auth/github/callback?code=" + code).then((response) => {
        console.log(response.data);
        if (response.data.access_token) {
          localStorage.setItem("github_access_token", response.data.access_token);
        }
        // window.location.href = "/";
      });
    }
  };

  useEffect(handleOAuth, []);

  useEffect(getData, []);

  return (
    <main>
      <GitHubProfile />
      <a href="https://github.com/login/oauth/authorize?client_id=Ov23libLniF4J8rfOO9e">GitHub Login</a>
      <NewsIndex news={news} />
    </main>
  );
}

