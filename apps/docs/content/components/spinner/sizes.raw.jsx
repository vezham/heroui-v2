import {Spinner} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
}
