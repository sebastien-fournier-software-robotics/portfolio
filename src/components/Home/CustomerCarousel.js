import React, { memo } from "react";
import geHealthcare from "../../assets/Customers/ge-healthcare.png";
import echosens from "../../assets/Customers/echosens.png";
import navya from "../../assets/Customers/navya.png";
import tdk from "../../assets/Customers/tdk-corporation.png";
import macnica from "../../assets/Customers/macnica.png";

const CUSTOMERS = [
  { name: "GE Healthcare", logo: geHealthcare },
  { name: "Echosens", logo: echosens },
  { name: "Navya", logo: navya },
  { name: "TDK", logo: tdk },
  { name: "Macnica", logo: macnica },
];

const LogoSet = memo(function LogoSet() {
  return (
    <div className="customer-carousel-set">
      {CUSTOMERS.map((customer, index) => (
        <div key={index} className="customer-carousel-item">
          <img
            src={customer.logo}
            alt={customer.name}
            title={customer.name}
          />
        </div>
      ))}
    </div>
  );
});

function CustomerCarousel() {
  return (
    <div className="customer-carousel">
      <div className="customer-carousel-track">
        <LogoSet />
        <LogoSet />
        <LogoSet />
        <LogoSet />
      </div>
    </div>
  );
}

export default CustomerCarousel;
