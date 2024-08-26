import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import "./PriceSlider.css"

const MIN = 0;
const MAX = 1000;

const PriceSlider: React.FC = () => {
  const [values, setValues] = useState<number[]>([MIN, MAX]);

  return (
    <div className="w-full py-6">
      <Range
        values={values}
        step={10}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => {
          return (
            <div
              {...props}
              className="h-1 w-full bg-gray-200 rounded-md slider-thumb-container"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#fa8c16", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          )
        }}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;
          return (
            <div
              {...restProps}
              key={key}
              className="slider-thumb h-3 w-3 rounded-full flex justify-center items-center text-white outline-0"
            >
              <div className="w-[10px] h-[10px] rounded-full outline-0" />
            </div>
          )
        }}
      />
      <div className="flex justify-between mt-4">
        <div>${values[0]}</div>
        <div>${values[1]}</div>
      </div>
    </div>
  );
};

export default PriceSlider;
