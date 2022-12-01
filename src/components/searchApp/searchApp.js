import { useState } from 'react';
import "../../App.css";
import {Link} from "react-router-dom";
import Image from '../image';
//s8c7TPeE_vdCizILU3b1eXS8uCYg1Cfp4VdSpqg6QLg
export default function SearchApp({bookmarks, setBookmarks}) {
    const [search, setSearch] = useState("");
    const [images, setImages] = useState([]);
    function handleChange(event){
      setSearch(event.target.value);
    }

    // useEffect(()=> {
    //     fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=s8c7TPeE_vdCizILU3b1eXS8uCYg1Cfp4VdSpqg6QLg`)
    //     .then(res => res.json())
    //     .then(data => { console.log(data.results) })
    // }, [search])

    function handleSearch(e){
        e.preventDefault();
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=s8c7TPeE_vdCizILU3b1eXS8uCYg1Cfp4VdSpqg6QLg`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setImages(data.results)})
    }
  return (
    <>
        <div className='header'>
        <div className='header--row1'>
          <h2>React Photo Search</h2>
          <Link to="/bookmarks">
            <button>Bookmarks</button>
          </Link>
        </div>
        <div className='header--row2'>
          <input type="text"
                 placeholder='Seach for high resolution images' 
                 value={search}
                 onChange={handleChange}/>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className='main-container'>
        {images.map((image) => <Image key={image.urls.small} image={image} bookmarks={bookmarks} setBookmarks={setBookmarks}/>) }
      </div>
    </>
  )
}
