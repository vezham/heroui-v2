import type {AvatarGroupProps as BaseAvatarGroupProps} from "@vx-oss/heroui-v2-react";

import {forwardRef} from "react";
import {Avatar, useAvatarGroup, AvatarGroupProvider} from "@vx-oss/heroui-v2-react";

export interface AvatarGroupProps extends BaseAvatarGroupProps {}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const {
    Component,
    clones,
    context,
    remainingCount,
    renderCount = (count) => <Avatar name={`+${count}`} />,
    getAvatarGroupProps,
  } = useAvatarGroup({
    ref,
    ...props,
  });

  return (
    <Component {...getAvatarGroupProps()}>
      <AvatarGroupProvider value={context}>
        {clones}
        {remainingCount > 0 && renderCount(remainingCount)}
      </AvatarGroupProvider>
    </Component>
  );
});

AvatarGroup.displayName = "AvatarGroup";

export default AvatarGroup;
