import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'
import Restaurant from './pages/Restaurant'
import Error from "./pages/Error";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
