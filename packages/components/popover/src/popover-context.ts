import type {UsePopoverReturn} from "./use-popover";

import {createContext} from "@vx-oss/heroui-v2-react-utils";

export const [PopoverProvider, usePopoverContext] = createContext<UsePopoverReturn>({
  name: "PopoverContext",
  errorMessage:
    "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`",
});
