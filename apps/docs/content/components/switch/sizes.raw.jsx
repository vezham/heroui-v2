import {Switch} from "@vx-oss/heroui-v2-react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Switch defaultSelected size="sm">
        Small
      </Switch>
      <Switch defaultSelected size="md">
        Medium
      </Switch>
      <Switch defaultSelected size="lg">
        Large
      </Switch>
    </div>
  );
}
