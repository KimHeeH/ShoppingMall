import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const goLoginPage = () => {
    navigate("/login");
  };
  const goHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div
          style={{ border: "none", background: "white" }}
          onClick={goLoginPage}
        >
          로그인
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s"
          onClick={goHomePage}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-area">
          <FontAwesomeIcon style={{ marginRight: "7px" }} icon={faSearch} />
          <input
            style={{ marginBottom: "5px", border: "none", outline: "none" }}
            type="text"
            value={"드레스"}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
