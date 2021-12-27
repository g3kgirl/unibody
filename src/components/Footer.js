import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <h3>GET TO KNOW US</h3>

            <Link> Connecting students on their higher ed journey</Link>
            <Link> Careers</Link>
            <Link> Resources</Link>
            <Link> Products</Link>
            <Link> Meet the 450+ Universities Using Digital Peer-to-Peer</Link>
            <Link> In the News</Link>
            <Link>Help Centre</Link>
            <Link>University Log-in</Link>
            <Link>Ambassador Log-in</Link>
          </div>

          <div
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <h3>PRODUCTS</h3>
            <Link>Unibuddy Chat</Link>
            <Link>Unibuddy Events</Link>
            <Link>Discover</Link>
          </div>

          <div
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <h3>WHY US</h3>
            <Link>For Student Recruitment</Link>
            <Link>For Ambassadors</Link>
            <Link>For Widening Participation</Link>
            <Link>For international recruitment</Link>
            <Link>For Domestic Admissions</Link>
            <Link>For Higher Education Marketing</Link>
            <Link>For Students</Link>
            <Link>For Educational Equity</Link>
            <Link>For International Admissions</Link>
          </div>

          <div
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <h3>TERMS OF USE</h3>
            <Link>Terms of Use</Link>
            <Link>Privacy Policy</Link>
            <Link> Acceptable Use Policy</Link>
            <Link>Cookie Policy</Link>
            <Link>Accessibility Policy</Link>
            <Link>Sub-processors</Link>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Footer;
