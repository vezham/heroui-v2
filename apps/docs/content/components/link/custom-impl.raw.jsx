import {forwardRef} from "react";
import {LinkIcon} from "@vx-oss/heroui-v2-shared-icons";
import {linkAnchorClasses} from "@vx-oss/heroui-v2-theme";
import {useLink} from "@vx-oss/heroui-v2-react";

const MyLink = forwardRef((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

MyLink.displayName = "MyLink";

export default MyLink;
