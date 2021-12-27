import React from "react";
import Text from "./Text";

const SectionThird = () => {
  return (
    <>
      <div style={{ marginLeft: "10%", height: "100vh" }}>
        <div>
          <h3>OUR PARTNERS</h3>
          <Text text="See why our partners love us" />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "20%" }}>
            <img
              id="round-imgage"
              src="https://unibuddy.com/wp-content/uploads/2021/04/ams-without-flag-1.svg"
            />

            <img
              id="flag"
              src="https://unibuddy.com/wp-content/uploads/2021/04/belgium-flag.svg"
            />
          </div>
          <div style={{ width: "70%" }}>
            <p>
              <i>
                "Email and direct messaging have always been our most-used
                channels. However, the biggest change for us has been taking our
                events online. We have a higher show-up rate with Unibuddy Live
                because it’s less effort and we were able to extend our reach –
                we have students from countries we’ve never traveled to before."
              </i>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "30px" }}>
            <img
              id="round-img"
              src="https://unibuddy.com/wp-content/uploads/2021/04/1.png"
            />
          </div>
          <div style={{ width: "40%", marginRight: "45px" }}>
            <author>Eva peeters</author>
            <Text text1="Student Recruitment Manager at Antwerp Management School" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <img
                id="round-img"
                src="https://unibuddy.com/wp-content/uploads/2021/04/testimonial-amy.png"
              />
            </div>
            <div style={{ width: "60%", marginLeft: "20px" }}>
              <span>Prospective Student</span>
              <h6 className="text-h6">
                Having someone that I spoke to prior to coming to the university
                made me feel more welcome and comfortable
              </h6>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="right">
              <img
                id="round-img"
                src="https://unibuddy.com/wp-content/uploads/2021/04/testimonial-joe.png"
              />
            </div>
            <div style={{ width: "60%", marginLeft: "20px" }}>
              <span>Student Ambassador</span>
              <h6 className="text-h6">
                The feeling that I am able to help shape someone's dream and
                fulfil their dream, that’s the biggest reward
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThird;
