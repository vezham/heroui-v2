import type {HTMLHeroUIProps} from "@vx-oss/heroui-v2-system";

import {forwardRef} from "@vx-oss/heroui-v2-system";
import {useDOMRef} from "@vx-oss/heroui-v2-react-utils";
import {cn} from "@vx-oss/heroui-v2-theme";

import {useNavbarContext} from "./navbar-context";

export interface NavbarBrandProps extends HTMLHeroUIProps<"div"> {
  children?: React.ReactNode | React.ReactNode[];
}

const NavbarBrand = forwardRef<"div", NavbarBrandProps>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useNavbarContext();

  const styles = cn(classNames?.brand, className);

  return (
    <Component ref={domRef} className={slots.brand?.({class: styles})} {...otherProps}>
      {children}
    </Component>
  );
});

NavbarBrand.displayName = "HeroUI.NavbarBrand";

export default NavbarBrand;
