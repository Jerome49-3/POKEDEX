/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
const Image = ({ alt, classImg, name, src }) => {
  // console.log("src in Image:", src);
  const [onError, setOnError] = useState(false);
  // const question = "/img/questionIcone.png";
  console.log("onError sur Image:", onError);
  return (
    <>
      {!onError ? (
        <>
          <img
            src={src}
            alt={alt}
            className={classImg}
            onLoad={() => {
              setOnError(false);
            }}
            onError={() => {
              setOnError(true);
            }}
          />
        </>
      ) : (
        <div className="cardNotFound flex items-center gap-2 pr-5 pl-3 py-1 w-full">
          {/* <img src={question} alt={alt} className="imgNotFound" />
          <div>{name !== "unknown" ? <p>{name}</p> : <p>Not found</p>}</div> */}
        </div>
      )}
    </>
  );
};

export default Image;
