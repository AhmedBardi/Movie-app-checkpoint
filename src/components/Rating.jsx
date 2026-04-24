
import { Flex, Rate } from "antd";

const desc = [
    "terrible",
    { placement: "top", title: "bad", trigger: "hover" },
    "normal",
    "good",
    "wonderful",
];

function getDescTitle(value, desc) {
    const item = desc?.[value - 1];
    return typeof item === "object" ? item.title : item;
}

const Rating = ({ rate, isRating, searchRate, setSearchRate }) => {
  return isRating ? ( //isRating ==True l'appel card
    <Rate value={rate} disabled />
  ) : ( //isRating == false l'appel home 
    <Rate tooltips={desc} onChange={setSearchRate} value={searchRate} />
  );
};
export default Rating;