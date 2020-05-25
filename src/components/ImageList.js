import React from "react";

const ImageList = (props) => {
  const imagesDiv = props.images.map(({ description, urls, id }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });
  return <div>{imagesDiv}</div>;
};

export default ImageList;
