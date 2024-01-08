import MultiRangeSlider from "multi-range-slider-react";

const Price = ({minValue,setMinValue,maxValue,setMaxValue}) => {

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  return (
    <>
      <MultiRangeSlider
        min={0}
        max={2000}
        step={1}
        style={{ border: "none", boxShadow: "none" }}
        ruler={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </>
  );
};

export default Price;
