import type {ContextType} from "./use-checkbox-group";

import {createContext} from "@vx-oss/heroui-v2-react-utils";

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<ContextType>({
  name: "CheckboxGroupContext",
  strict: false,
});
