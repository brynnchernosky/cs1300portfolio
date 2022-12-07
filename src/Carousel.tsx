import React, { useEffect, useState } from "react";
import "./Carousel.css";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
export interface ICarouselProps {
  height: number;
  width: number;
  carouselElements: {
    image: string;
    altText: string;
    caption: JSX.Element | string;
  }[];
}

export const Carousel = (props: ICarouselProps) => {
  const { height, width, carouselElements } = props;

  const [centerImageIndex, setCenterImageIndex] = useState(0);
  const [centerImage, setCenterImage] = useState("");
  const [centerAlt, setCenterAlt] = useState("");
  const [caption, setCaption] = useState<JSX.Element | string>(<div></div>);

  const incrementCenterIndex = () => {
    if (centerImageIndex == carouselElements.length - 1) {
      updateCenterImage(0);
      setCenterImageIndex(0);
    } else {
      updateCenterImage(centerImageIndex + 1);
      setCenterImageIndex(centerImageIndex + 1);
    }
  };

  const decrementCenterIndex = () => {
    if (centerImageIndex == 0) {
      updateCenterImage(carouselElements.length - 1);
      setCenterImageIndex(carouselElements.length - 1);
    } else {
      updateCenterImage(centerImageIndex - 1);
      setCenterImageIndex(centerImageIndex - 1);
    }
  };

  const updateCenterImage = (index: number) => {
    setCenterImage(carouselElements[index].image);
    setCenterAlt(carouselElements[index].altText);
    setCaption(carouselElements[index].caption);
  };

  useEffect(() => {
    updateCenterImage(centerImageIndex);
  }, []);

  return (
    <div id="carousel">
      <div id="imageSelection">
        <div
          onClick={decrementCenterIndex}
          style={{ transform: "rotate(180deg)" }}
        >
          <PlayCircleFilledWhiteOutlinedIcon
            sx={{ fontSize: "50px", cursor: "pointer", margin: 0, padding: 0 }}
          />
        </div>
        <div
          id="centerImageContainer"
          style={{
            height: height + "px",
            width: width + "px",
            overflow: "hidden",
            margin: 0,
            padding: 0,
          }}
        >
          <img src={centerImage} alt={centerAlt} id="centerImage" />
        </div>
        <div onClick={incrementCenterIndex}>
          <PlayCircleFilledWhiteOutlinedIcon
            sx={{
              fontSize: "50px",
              cursor: "pointer",
              marginTop: "15px",
              padding: 0,
            }}
          />
        </div>
      </div>
      {caption != "" && <div id="caption">{caption}</div>}
    </div>
  );
};
