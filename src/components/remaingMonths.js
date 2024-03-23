import Component from "./reUsable";
export default function RemainingMonths({ finalMonth, isTrue }) {
  return (
    <Component>
      <span className="text" id="text_color">
        {isTrue ? "--" : finalMonth}
      </span>
      <p className="text">months</p>
    </Component>
  );
}
