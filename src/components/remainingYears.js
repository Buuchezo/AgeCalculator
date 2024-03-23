import Component from "./reUsable";
export default function RemainingYears({ finalYear, isTrue }) {
  return (
    <Component>
      <span className="text" id="text_color">
        {isTrue ? "--" : finalYear}
      </span>
      <p className="text">years</p>
    </Component>
  );
}
