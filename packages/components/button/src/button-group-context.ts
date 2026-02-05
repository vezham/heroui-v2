import type {ContextType} from "./use-button-group";

import {createContext} from "@vx-oss/heroui-v2-react-utils";

export const [ButtonGroupProvider, useButtonGroupContext] = createContext<ContextType>({
  name: "ButtonGroupContext",
  strict: false,
});
