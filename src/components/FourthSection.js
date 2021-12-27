import React from "react";
const FourthSection = () => {
  return (
    <>
      <div className="f-page">
        <div>
          <h3> WHY UNIBUDDY</h3>
        </div>

        <div style={{ width: "20%" }}>
          <div className="h4-2design">
            <h4 className="h4-sec-design">1</h4>
            <h2>Designed for students</h2>
          </div>
          <div>
            <h6>
              Using a student-centric platform allows you to proactively
              attract, nurture and engage with students.
            </h6>
          </div>
        </div>
        <div style={{ width: "20%" }}>
          <div className="h4-2design">
            <h4 className="h4-sec-design">2</h4>
            <h2>Built by higher ed experts</h2>
          </div>
          <h6>
            The Unibuddy team is a community of higher ed professionals with
            more than 100 years experience, who know the sector in and out.
          </h6>
        </div>
        <div style={{ width: "20%" }}>
          <div className="h4-2design">
            <h4 className="h4-sec-design">3</h4>
            <h2>Shaped by industry needs</h2>
          </div>
          <div>
            <h6>
              The student decision-making journey has entered the digital age,
              where peer-to-peer networking happens online. Evolve with your
              students and meet them there.
            </h6>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#6852fb",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "white" }}>
          Start recruiting your best-fit students
        </h2>
        <button className="bright-btn">Book A Demo</button>
      </div>
    </>
  );
};

export default FourthSection;
