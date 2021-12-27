import React from "react";
import Header from "./Header";
import Button from "./Button";
import Text from "./Text";
import "../App.css";
import ReactPlayer from "react-player";
import SectionSec from "./SectionSec";
import SectionThird from "./SectionThird";
import FourthSection from "./FourthSection";
import Fiveth from "./Fiveth";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Home = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        className="Home-page"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",

          marginTop: "80px",
        }}
      >
        <div style={{ width: "40%" }}>
          <Text
            text="#1 peer-to-peer platform for student
         recruitment, purpose-built for higher ed"
            text1="Recruit and engage prospective students by building meaningful 
          connections through chat, live events and top-tier partnerships."
          />
          <Button text="Book a demo" />
        </div>
        <div style={{ width: "40%", marginTop: "40px" }}>
          <ReactPlayer
            width="540px"
            height="311px"
            left="1px"
            top="0px"
            controls
            url="https://youtu.be/4wSgE3qfc6Y"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "50px",
          color: "#3e3e48",
        }}
      >
        <div>
          <h2>450+ PARTNERS</h2>
        </div>
        <div>
          <h2>35+ COUNTRIES </h2>
        </div>
        <div>
          <h2>10M+ MESSAGE</h2>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "60px",
        }}
      >
        <div>
          <img
            style={{ width: "100px", height: "15vh", marginLeft: "20px" }}
            src=" https://unibuddy.com/wp-content/uploads/2021/04/King_s_College_London_logo.svg"
          />
        </div>
        <div>
          <img src="https://unibuddy.com/wp-content/uploads/2021/04/HEC_Paris-1.svg" />
        </div>
        <div>
          <img
            style={{ width: "100px", height: "15vh" }}
            src=" https://unibuddy.com/wp-content/uploads/2021/04/King_s_College_London_logo.svg"
          />
        </div>
        <div>
          <img src="https://unibuddy.com/wp-content/uploads/2021/04/HEC_Paris-1.svg" />
        </div>

        <div>
          <img src=" https://unibuddy.com/wp-content/uploads/2021/04/HEC_Paris-1.svg" />
        </div>
      </div>
      <hr />
      <div>
        <SectionSec />
      </div>
      <div>
        <SectionThird />
      </div>
      <div>
        <FourthSection />
      </div>
      <div>
        <Fiveth />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
