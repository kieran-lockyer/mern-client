import React from "react";
import { StatsItem as Stats, AnimatedNum } from "./styles";
import AnimatedNumber from "react-animated-number";

// Add commas to number
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ({ name, value }) => {
  return (
    <Stats>
      <h2>
        <AnimatedNumber
          value={value}
          style={AnimatedNum}
          formatValue={n => numberWithCommas(n)}
          stepPrecision={0}
          duration={1000}
        />
      </h2>
      <span>{name}</span>
    </Stats>
  );
};
