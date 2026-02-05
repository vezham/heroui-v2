import {Snippet} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <Snippet
      tooltipProps={{
        color: "foreground",
        content: "Copy this snippet",
        disableAnimation: true,
        placement: "right",
        closeDelay: 0,
      }}
    >
      npm install @vx-oss/heroui-v2-react
    </Snippet>
  );
}
