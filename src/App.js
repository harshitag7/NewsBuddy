import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";

function App() {
  const [category, setCategory] = useState('general');
  return (
    <div className="App">
      <Navbar setCategory={setCategory}/>
      <NewsContainer category={category}/>
    </div>
  );
}

export default App;
