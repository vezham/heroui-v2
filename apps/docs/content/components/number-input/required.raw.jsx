import {NumberInput} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <NumberInput
      isRequired
      className="max-w-xs"
      defaultValue={1024}
      label="Amount"
      placeholder="Enter the amount"
    />
  );
}
