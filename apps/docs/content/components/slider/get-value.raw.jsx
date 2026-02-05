import {Slider} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <Slider
      className="max-w-md"
      getValue={(donuts) => `${donuts} of 60 Donuts`}
      label="Donuts to buy"
      maxValue={60}
      size="sm"
    />
  );
}
