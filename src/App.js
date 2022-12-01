import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchApp from './components/searchApp/searchApp';
import Bookmarks from './components/bookmarks/bookmarks';
import { useState } from 'react';

function App() {
 const [bookmarks, setBookmarks] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <SearchApp bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
          <Route path='/bookmarks' element={ <Bookmarks bookmarks={bookmarks}/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
