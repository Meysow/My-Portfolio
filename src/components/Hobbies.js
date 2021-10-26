import React, { useState } from "react";
import climbing from "../assets/climbing.png";
import trekking from "../assets/trekking.png";
import chess from "../assets/chess.png";

const Hobbies = () => {
  const imgArray = [climbing, trekking, chess];
  const [lightBoxDisplay, setlightBoxDisplay] = useState(false);
  const [imgToShow, setImgToShow] = useState("");

  const showImg = (image) => {
    setImgToShow(image);
    setlightBoxDisplay(true);
  };

  const closeLightBox = () => {
    setlightBoxDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = imgArray.indexOf(imgToShow);
    if (currentIndex >= imgArray.length - 1) {
      setImgToShow(imgArray[0]);
    } else {
      let nextImage = imgArray[currentIndex + 1];
      setImgToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = imgArray.indexOf(imgToShow);
    if (currentIndex <= 0) {
      setImgToShow(imgArray[2]);
    } else {
      let nextImage = imgArray[currentIndex - 1];
      setImgToShow(nextImage);
    }
  };

  return (
    <div className="hobbies">
      <div className="hobbiesContainer">
        <h1>Hobbies</h1>
        <div className="flexContainer">
          <div className="hobby">
            <figure className="imgContainer">
              <img
                src={climbing}
                alt="Climber"
                className="climbing"
                width="369"
                height="139"
                onClick={() => showImg(climbing)}
              />
            </figure>
            <h2>Climbing</h2>
            <h3>Indoor and Outdoor lead climbing and boulder climbing.</h3>
          </div>
          <div className="hobby">
            <figure className="imgContainer">
              <img
                src={trekking}
                alt="trekking"
                className="trekking"
                width="369"
                height="139"
                onClick={() => showImg(trekking)}
              />
            </figure>
            <h2>Hiking/Trekking</h2>
            <h3>Hiking and Trekking in various places around the world.</h3>
          </div>
          <div className="hobby">
            <figure className="imgContainer">
              <img
                src={chess}
                alt="chess"
                width="369"
                height="139"
                onClick={() => showImg(chess)}
              />
            </figure>
            <h2>Chess</h2>
            <h3>Chess enthusiast since childhood.</h3>
          </div>
        </div>
      </div>
      {lightBoxDisplay ? (
        <div className="lightBox" onClick={closeLightBox}>
          <button onClick={showPrev}>❮</button>
          <img className="lightBoxImg" src={imgToShow} alt={imgToShow} />
          <button onClick={showNext}>❯</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Hobbies;
