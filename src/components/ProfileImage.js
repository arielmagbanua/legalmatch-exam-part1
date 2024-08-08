import emptyAvatar from "../assets/empty-avatar.svg";
import {useEffect, useState} from "react";

function ProfileImage({ imageSrc, alt }) {
  const [image, setImage] = useState();

  useEffect(() => {
    const image = require(`../assets/${imageSrc}`);
    setImage(image);
  }, [imageSrc])

  return image ? <img className="w-16 mb-1" src={image} alt={alt}/> :
    <img className="w-16 mb-1" src={emptyAvatar} alt="avatar"/>
}

export default ProfileImage;
