import type {HTMLHeroUIProps} from "@vx-oss/heroui-v2-system";

import {forwardRef} from "@vx-oss/heroui-v2-system";
import {useDOMRef} from "@vx-oss/heroui-v2-react-utils";
import {dataAttr} from "@vx-oss/heroui-v2-shared-utils";
import {cn} from "@vx-oss/heroui-v2-theme";

import {useNavbarContext} from "./navbar-context";

export interface NavbarItemProps extends HTMLHeroUIProps<"li"> {
  children?: React.ReactNode;
  /**
   * Whether the item is active or not.
   * @default false
   */
  isActive?: boolean;
}

const NavbarItem = forwardRef<"li", NavbarItemProps>((props, ref) => {
  const {as, className, children, isActive, ...otherProps} = props;

  const Component = as || "li";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useNavbarContext();

  const styles = cn(classNames?.item, className);

  return (
    <Component
      ref={domRef}
      className={slots.item?.({class: styles})}
      data-active={dataAttr(isActive)}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

NavbarItem.displayName = "HeroUI.NavbarItem";

export default NavbarItem;
