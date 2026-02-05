import type {ContextType} from "./use-card";

import {createContext} from "@vx-oss/heroui-v2-react-utils";

export const [CardProvider, useCardContext] = createContext<ContextType>({
  name: "CardContext",
  strict: true,
  errorMessage:
    "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />",
});
