import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

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
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full bg-gray-200 rounded-md"
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
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-4 w-4 bg-black rounded-full flex justify-center items-center text-white"
          >
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        )}
      />
      <div className="flex justify-between mt-4">
        <div>${values[0]}</div>
        <div>${values[1]}</div>
      </div>
    </div>
  );
};

export default PriceSlider;
