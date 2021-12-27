import React, { useState } from "react";
import "../App.css";
import Text from "./Text";
import { Link } from "react-router-dom";
import Button from "./Button";
const SectionSec = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const handleOne = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
  };
  const handletwo = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
  };
  const handlethree = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
  };
  return (
    <>
      <div className="tab">
        <div>
          <button className="button-onchange" onClick={handleOne}>
            UNIBUDDY CHAT
          </button>
        </div>
        <div>
          <button className="button-onchange" onClick={handletwo}>
            UNIBUDDY EVENTS
          </button>
        </div>
        <div>
          <button className="button-onchange" onClick={handlethree}>
            UNIBUDDY DISCOVER
          </button>
        </div>
      </div>

      {one && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              style={{ width: "100%", height: "100vh" }}
              src=" https://unibuddy.com/wp-content/uploads/2021/04/Group-1316-1.png"
              alt="unibuddy chat"
            />
          </div>
          <div style={{ width: "30%" }}>
            <h2>Unibuddy chat</h2>
            <Text
              text1="Place student ambassadors and university 
                staff at the heart of your recruitment strategy using our interactive chat tool, featuring ambassador blogs
                 to increase student engagement and enrollment."
            />
            <Button text="Find Out More" />
          </div>
        </div>
      )}

      {two && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              style={{ width: "100%", height: "100vh" }}
              src=" https://unibuddy.com/wp-content/uploads/2021/04/Group-1314.png"
              alt="unibuddy event"
            />
          </div>
          <div style={{ width: "30%" }}>
            <h2>Unibuddy Event</h2>
            <Text
              text1="Supercharge yield and conversions by creating 
              engaging virtual events to connect with prospective students
               from pre-application to enrollment and beyond."
            />

            <Button text="Find Out More" />
          </div>
        </div>
      )}

      {three && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              style={{ width: "100%", height: "100vh" }}
              src="https://unibuddy.com/wp-content/uploads/2021/04/discover.png"
              alt="unibuddy discover"
            />
          </div>
          <div style={{ width: "30%" }}>
            <h2>Unibuddy Discover</h2>
            <Text
              text1="Reach a diverse student pool early in their 
            decision-making process through our top-tier partnerships. Discover promotes your institution and ambassador program on our trusted channels to
             reach prospects around the world."
            />
            <Button text="Find Out More" />
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#6852fb",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "white" }}>Use our insights for your marketing</h2>
        <button className="bright-btn">Download Report</button>
      </div>

      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f0f2f2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            width: "50%",

            marginLeft: "80px",
          }}
        >
          <h3>OUR IMPACT</h3>
          <Text
            text="Increase the number of students
           that apply and enroll
Our Impact - icon"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              id="round-img"
              src=" https://unibuddy.com/wp-content/uploads/2019/05/university-southhampton.png"
            />
            <div>
              <h4 className="h4-design">1 in 3</h4>
              <h5>users applied</h5>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              id="round-img"
              src=" https://unibuddy.com/wp-content/uploads/2019/06/St.-Johns-University-thumbnail-logo.png"
            />
            <div>
              <h4 className="h4-design">28%</h4>
              <h5>users applied</h5>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              id="round-img"
              src=" https://unibuddy.com/wp-content/uploads/2021/04/erasmus.svg"
            />
            <div style={{ width: "40%" }}>
              <h4 className="h4-design">90%</h4>
              <h5>of accepted users go on to enroll</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSec;
