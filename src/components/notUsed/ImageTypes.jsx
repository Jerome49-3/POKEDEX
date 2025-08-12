/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useLayoutEffect } from "react";
import spritesGen from "../../assets/json/spritesGen.json";

const Image = ({ alt, classImg, name, src }) => {
  // console.log("src in Image:", src);
  const question = "/img/questionIcone.png";
  const [onError, setOnError] = useState(false);
  console.log("onError sur Image:", onError);
  const [urlImg, setUrlImg] = useState("");
  console.log("urlImg sur Image:", urlImg);
  const [newlinksImgs, setnewLinksImgs] = useState([]);
  console.log("newlinksImgs sur Image:", newlinksImgs);
  const ref1 = useRef(0);
  const ref2 = useRef(0);
  let linksImgs = [];

  useLayoutEffect(() => {
    setnewLinksImgs(linksImgs);
  }, []);

  //je parse l'url src
  const oldUrl = new URL(src);
  console.log("oldUrl:", oldUrl);
  //j'assigne l'origin et le pathname dans deux constantes
  const urlPathname = oldUrl.pathname.split("/");
  console.log("urlPathname:", urlPathname);
  const urlOrigin = oldUrl.origin;
  console.log("urlOrigin:", urlOrigin);
  const pldArr = urlPathname.shift();
  console.log("pldArr:", pldArr);
  const imgLinks = spritesGen.forEach((gen) => {
    console.log("gen:", gen);
    urlPathname[5] = gen.name;
    const genVers = gen.version.map((genVs) => {
      console.log("genVs:", genVs);
      urlPathname[6] = genVs;
      const newImgsLinks = urlOrigin + "/" + urlPathname.join("/");
      linksImgs.push(newImgsLinks);
      return newImgsLinks;
    });
    console.log("genVers:", genVers);
    console.log("linksImgs:", linksImgs);
  });
  console.log("imgLinks:", imgLinks);
  return (
    <>
      {newlinksImgs.map((img) => {
        return (
          <>
            {!onError ? (
              <>
                <img
                  src={img}
                  alt={alt}
                  className={classImg}
                  onLoad={() => {
                    setOnError(false);
                  }}
                  onError={() => {
                    ++ref1.current;
                    setOnError(true);
                  }}
                />
              </>
            ) : (
              <div className="cardNotFound flex items-center gap-2 bg-neutral-900 pr-5 pl-3 py-1 w-full">
                <img src={question} alt={alt} className="imgNotFound" />
                <div>
                  {name !== "unknown" ? <p>{name}</p> : <p>Not found</p>}
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default Image;
