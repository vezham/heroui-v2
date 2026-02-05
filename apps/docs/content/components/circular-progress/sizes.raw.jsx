import {CircularProgress} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <div className="flex gap-4">
      <CircularProgress aria-label="Loading..." size="sm" />
      <CircularProgress aria-label="Loading..." size="md" />
      <CircularProgress aria-label="Loading..." size="lg" />
    </div>
  );
}
