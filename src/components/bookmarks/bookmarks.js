import React from 'react'
import "../../App.css"

export default function Bookmarks({bookmarks}) {
    return(
        
        <div className='bookmarks-conatiner'>
            <h2>Bookmarked Images</h2>
            <div className='bimages-container'>
                {bookmarks.map((item) => <div key={item.urls.small} className='image-conatiner'>
                <img src={item.urls.small} alt={item.urls.small} />
                </div>)}
            </div>
        </div>
    )
}
