import type {UseDropdownReturn} from "./use-dropdown";

import {createContext} from "@vx-oss/heroui-v2-react-utils";

export const [DropdownProvider, useDropdownContext] = createContext<UseDropdownReturn>({
  name: "DropdownContext",
  errorMessage:
    "useDropdownContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Dropdown />`",
});
