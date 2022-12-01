import React from 'react';
import "../App.css"
import {useState} from "react";

export default function Image({image,bookmarks, setBookmarks}) {
    const [hovered, setHovered] = useState(false);
    
    function handleBookmarked(){
        console.log(image)
        setBookmarks([...bookmarks, image])
    }
  return (
    <>
        <div key={image.id} className='image-conatiner'
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}>
            <img src={image.urls.small} alt={image.urls.small} />
            {hovered && <i className="fa-solid fa-bookmark"
                            onClick={handleBookmarked}></i>}
        </div>
    </>
  )
}
