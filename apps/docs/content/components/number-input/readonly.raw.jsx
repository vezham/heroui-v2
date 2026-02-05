import {NumberInput} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <NumberInput
      isReadOnly
      aria-label="Amount"
      className="max-w-xs"
      defaultValue={1024}
      placeholder="Enter the amount"
      variant="bordered"
    />
  );
}
