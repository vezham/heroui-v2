import {Slider} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <Slider
      aria-label="Player progress"
      className="max-w-md"
      color="foreground"
      defaultValue={20}
      hideThumb={true}
    />
  );
}
