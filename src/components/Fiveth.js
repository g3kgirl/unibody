import React from "react";
import Text from "./Text";

const Fiveth = () => {
  return (
    <>
      <div>
        <div style={{ marginLeft: "10%", width: "60%" }}>
          <h3>GET MORE OUT OF UNIBUDDY</h3>
          <Text text="Download our most recent content for more tips & tricks" />
        </div>
        <div className="main-card">
          <div className="card">
            <div className="card-image">
              <img
                style={{ width: "100%", objectFit: "contain", height: "100%" }}
                src="https://unibuddy.com/wp-content/uploads/2021/04/Screenshot-2021-04-28-at-12.11.08.png"
              />
            </div>
            <div className="card-content">
              <span>NEW GUIDE</span>
              <strong>2021 Higher-Ed events guide</strong>
              <button className="button">Read</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img
                style={{ width: "100%", objectFit: "contain", height: "100%" }}
                src="https://unibuddy.com/wp-content/uploads/2021/04/Screenshot-2021-04-28-at-12.09.00.png"
              />
            </div>
            <div className="card-content">
              <span>BLOG POST</span>
              <strong>Getting started with ambassadors</strong>
              <button className="button">Read</button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <button className="bright-button">See all resources</button>
        </div>
      </div>
    </>
  );
};

export default Fiveth;
