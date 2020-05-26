import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const imagesDiv = props.images.map(({ description, urls, id }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });
  return <div className='image-list'>{imagesDiv}</div>;
};

export default ImageList;
