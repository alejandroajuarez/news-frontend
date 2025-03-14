import axios from "axios";
import { Header } from "./Header";
import { NewsPage } from "./NewsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <NewsPage />
      <Footer />
    </div>
  )
}

export default App;