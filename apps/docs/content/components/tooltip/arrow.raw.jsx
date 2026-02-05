import {Tooltip, Button} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <Tooltip content="I am a tooltip" showArrow={true}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
