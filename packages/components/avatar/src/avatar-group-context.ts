import type {ContextType} from "./use-avatar-group";

import {createContext} from "@vx-oss/heroui-v2-react-utils";

export const [AvatarGroupProvider, useAvatarGroupContext] = createContext<ContextType>({
  name: "AvatarGroupContext",
  strict: false,
});
