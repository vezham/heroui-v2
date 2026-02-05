import {Progress} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <Progress
      className="max-w-md"
      color="warning"
      formatOptions={{style: "currency", currency: "ARS"}}
      label="Monthly expenses"
      maxValue={10000}
      showValueLabel={true}
      size="sm"
      value={4000}
    />
  );
}
