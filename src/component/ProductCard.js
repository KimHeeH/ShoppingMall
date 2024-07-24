import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = (id) => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product" onClick={showDetail}>
      <img width="300px" src={item?.img} />
      <div>{item?.choice === true ? "concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
