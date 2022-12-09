import "./App.css";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MainContainer />
    </div>
  );
}

export default App;
