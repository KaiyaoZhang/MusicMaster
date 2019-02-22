import React from 'react';

const Artist = ({ artist }) => {
    if(!artist) return null;
    const { images, name, followers, genres, popularity} = artist;

    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>Popularity:{popularity}</p>
            <p>{genres.join(',')}</p>
            <img src={images[0] && images[0].url} 
                alt='artist-profile' 
                style={{
                    width:200,
                    height:200,
                    borderRadius:100,
                    objectFit:'cover'
                }}/>
            {/* loop all the images in the images array and show them on the page */}
           {/*  {images.map((image,index) => {
                return <img src={images[index].url} key={index} alt='artist-profile' />
            })} */}
        </div>
    )
}

export default Artist;