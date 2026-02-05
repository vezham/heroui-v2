import {TimeInput} from "@vx-oss/heroui-v2-react";
import {Time} from "@internationalized/date";

export default function App() {
  return <TimeInput defaultValue={new Time(18)} maxValue={new Time(17)} />;
}
