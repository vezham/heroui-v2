import {Textarea} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <Textarea
      isRequired
      className="max-w-xs"
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
    />
  );
}
