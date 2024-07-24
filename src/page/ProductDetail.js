import React from "react";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState("");
  const [sizeList, setSizeList] = useState([]);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
    setSizeList(data.size);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} style={{ height: "500px" }} />
        </Col>
        <Col>
          <div>
            <div style={{ marginBottom: "10px", fontSize: "20px" }}>
              {product?.title}
            </div>
            <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
              \{product?.price}
            </div>
            <div style={{ marginBottom: "10px" }}>
              {product?.choice == true ? "concious choice" : ""}
            </div>
            <select style={{ marginBottom: "15px" }}>
              <option value="" disabled>
                사이즈 선택
              </option>
              {sizeList.map((size) => (
                <option>{size}</option>
              ))}
            </select>
            <div>
              <button
                style={{
                  width: "400px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                추가
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
