import {TimeInput} from "@vx-oss/heroui-v2-react";
import {Time} from "@internationalized/date";

export default function App() {
  return <TimeInput label="Meeting time" placeholderValue={new Time(9)} />;
}
