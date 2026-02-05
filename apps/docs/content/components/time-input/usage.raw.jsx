import {TimeInput} from "@vx-oss/heroui-v2-react";
import {Time} from "@internationalized/date";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <TimeInput label="Event Time" />
      <TimeInput defaultValue={new Time(11, 45)} label="Event Time" />
    </div>
  );
}
