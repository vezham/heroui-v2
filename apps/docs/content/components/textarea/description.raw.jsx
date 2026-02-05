import {Textarea} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <Textarea
      className="max-w-xs"
      description="Enter a concise description of your project."
      label="Description"
      placeholder="Enter your description"
      variant="faded"
    />
  );
}
