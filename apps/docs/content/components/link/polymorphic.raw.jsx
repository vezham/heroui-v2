import {Link, Button} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <Button
      showAnchorIcon
      as={Link}
      color="primary"
      href="https://github.com/vezham/heroui-v2"
      variant="solid"
    >
      Button Link
    </Button>
  );
}
