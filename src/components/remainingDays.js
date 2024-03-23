import Component from "./reUsable";
export default function RemainingDays({ finalDay, isTrue }) {
  return (
    <Component>
      <span className="text " id="text_color">
        {/* At the beginning it has to set  -- instead of being empty */}
        {isTrue ? "--" : finalDay}
      </span>
      <p className="text">days</p>
    </Component>
  );
}
