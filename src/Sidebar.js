import { useState } from "react";
import Card from "./Card.js";
export default function Sidebar() {
  const [countries, setCountries] = useState([
    "USA",
    "India",
    "Brasil",
    "France",
    "Germany",
  ]);

  const [percentage, setPercentage] = useState([
    "16.14",
    "8.09",
    "5.82",
    "5.54",
    "4.95",
  ]);

  return (
    <div>
      <Card color="#8a72be" value={countries[0]} effect={percentage[0]} />
      <Card color="tomato" value={countries[1]} effect={percentage[1]} />
      <Card color="#FFAE42." value={countries[2]} effect={percentage[2]} />
      <Card color="#77DD77" value={countries[3]} effect={percentage[3]} />

      {/* <div className="circle-percentage">
            <CircularProgressbar styles={{path:{stroke : `red`}}} value={percentage} text={`${percentage}%`} />
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `red`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  // Rotate the path
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "#d6d6d6",
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Rotate the trail
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "#f88",
                  // Text size
                  fontSize: "16px",
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: "#3e98c7",
                },
              }}
            />
          </div> */}
    </div>
  );
}
