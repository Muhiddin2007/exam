import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import {
  dom,
  mebel,
  mehmonxona,
  interyer,
  garden,
  qurilish,
  jihozlar,
} from "../service/data.js";
import { vector } from "./imgData";
import { Link } from "react-router-dom";

const Main = (props) => {
  const {
    onActives,
    useActive,
    useSecondActive,
    onSecondActives,
    useThirdActive,
    onThirdActives,
  } = props;
  return (
    <>
      <Father>
        <Ortga>
          <a href="#">
            <span>
              <FaArrowLeft />
            </span>
            Ortga
          </a>
        </Ortga>
        <div className="list-wrapper">
          <ul className="list-group">
            {dom.map((state) => (
              <li
                onClick={() => onActives(state)}
                key={state.id}
                className={
                  state === useActive
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                {state.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={
            useActive.id == 1
              ? "list-wrapper2 d-inline"
              : "list-wrapper2 d-none"
          }
        >
          <ul className="list-group">
            {mebel.map((state) => (
              <li
                onClick={() => onSecondActives(state)}
                key={state.id}
                className={
                  state === useSecondActive
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                {state.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={
            useSecondActive.id == 3 && useActive.id == 1
              ? "list-wrapper3 d-inline"
              : "list-wrapper3 d-none"
          }
        >
          <ul className="list-group">
            {mehmonxona.map((state) => (
              <li
                onClick={() => onThirdActives(state)}
                key={state.id}
                className={
                  state === useThirdActive
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                {state.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="check">
          {vector.map((image) => (
            <img src={image.img} />
          ))}
          <h3>
            Kategoriya tanlash <br /> <span>tugallandi</span>.
          </h3>
          <button className="btn">Davom etish</button>
        </div>
      </Father>
    </>
  );
};
// className={`${!grid_view ? "active" : null}`}
const Father = styled.section`
  .list-wrapper {
    display: inline-flex;
    margin-top: 14px;
    margin-left: 170px;
    width: 261px;
    height: 377px;
    background: #f1f1f1;
    .list-group-item {
      margin: 0;
      padding-left: 15px;
      padding-bottom: 5px;
      padding-top: 8px;
    }
    .active {
      color: #fff;
      background: #192b58;
    }
    .list-group {
      width: 100%;
      list-style: none;
      padding-left: 0;
      padding-top: 5px;
      cursor: pointer;
    }
  }
  .d-inline {
    display: inline-flex;
  }
  .d-none {
    display: none;
  }
  .list-wrapper2 {
    margin-top: 14px;
    margin-left: 19px;
    width: 261px;
    height: 377px;
    background: #f1f1f1;
    .list-group-item {
      margin: 0;
      padding-left: 15px;
      padding-bottom: 5px;
      padding-top: 8px;
    }
    .active {
      color: #fff;
      background: #192b58;
    }
    .list-group {
      width: 100%;
      list-style: none;
      padding-left: 0;
      padding-top: 5px;
      cursor: pointer;
    }
  }
  .list-wrapper3 {
    margin-top: 14px;
    margin-left: 19px;
    width: 261px;
    height: 377px;
    background: #f1f1f1;
    .list-group-item {
      margin: 0;
      padding-left: 15px;
      padding-bottom: 5px;
      padding-top: 8px;
    }
    .active {
      color: #fff;
      background: #192b58;
    }
    .list-group {
      width: 100%;
      list-style: none;
      padding-left: 0;
      padding-top: 5px;
      cursor: pointer;
    }
  }
  .check {
    margin-top: 14px;
    margin-left: 19px;
    width: 222px;
    height: 287px;
    background: #f1f1f1;
    padding-left: 47px;
    padding-top: 100px;
    img {
      margin-left: 44px;
    }
    span {
      margin-left: 30px;
    }
  }
  .btn {
    background: #406bdb;
    width: 174px;
    height: 44px;
    border-radius: 4px;
    color: #fff;
    border: none;
  }
`;

const Ortga = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  span {
    align-items: center;
    padding: 26px 19px;
    font-size: 13px;
  }
  a {
    color: #192b58;
    text-decoration: none;
    font-size: 20px;
    background: #f1f1f1;
    width: 75%;
    padding: 18px;
  }
`;

export default Main;
