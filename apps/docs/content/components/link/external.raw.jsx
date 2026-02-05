import {Link} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Link isExternal href="https://github.com/vezham/heroui-v2">
        External Link
      </Link>
      <Link isExternal showAnchorIcon href="https://github.com/vezham/heroui-v2">
        External Link Anchor
      </Link>
    </div>
  );
}
