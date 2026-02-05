import {Link} from "@vx-oss/heroui-v2-react";
import NextLink from "next/link";

export default function App() {
  return (
    <Link as={NextLink} href="/route">
      Next.js Link
    </Link>
  );
}
