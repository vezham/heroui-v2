import {Snippet} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet variant="bordered">npm install @vx-oss/heroui-v2-react</Snippet>
      <Snippet color="warning" variant="flat">
        npm install @vx-oss/heroui-v2-react
      </Snippet>
      <Snippet color="primary" variant="solid">
        npm install @vx-oss/heroui-v2-react
      </Snippet>
      <Snippet color="secondary" variant="shadow">
        npm install @vx-oss/heroui-v2-react
      </Snippet>
    </div>
  );
}
