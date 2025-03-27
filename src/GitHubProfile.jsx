import axios from "axios";
import { useEffect, useState } from "react";

export function GitHubProfile() {
  const [profile, setProfile] = useState({});

  const handleProfile = () => {
    const githubAccessToken = localStorage.getItem("github_access_token");
    if (githubAccessToken) {
      console.log("Got the access token", githubAccessToken);
      axios.get("https://api.github.com/user", { headers: {Authorization: `Bearer ${githubAccessToken}`}}).then((response) => {
        console.log(response.data);
        setProfile(response.data);
      });
    }
  };

  useEffect(handleProfile, []);

  return (
    <div>
      <h1>Github Profile</h1>
      <img src={profile.avatar_url} alt="Github PFP" />
      <p>Name: {profile.login}</p>
      <p>Repos: {profile.public_repos}</p>
    </div>
  )
}