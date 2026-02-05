import type {HTMLHeroUIProps} from "@vx-oss/heroui-v2-system";

import {forwardRef} from "@vx-oss/heroui-v2-system";
import {useDOMRef} from "@vx-oss/heroui-v2-react-utils";
import {cn} from "@vx-oss/heroui-v2-theme";

import {useNavbarContext} from "./navbar-context";

export interface NavbarContentProps extends HTMLHeroUIProps<"ul"> {
  /**
   * The content of the Navbar.Content. It is usually the `NavbarItem`,
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * The justify of the content
   * @default start
   */
  justify?: "start" | "end" | "center";
}

const NavbarContent = forwardRef<"ul", NavbarContentProps>((props, ref) => {
  const {as, className, children, justify = "start", ...otherProps} = props;

  const Component = as || "ul";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useNavbarContext();

  const styles = cn(classNames?.content, className);

  return (
    <Component
      ref={domRef}
      className={slots.content?.({class: styles})}
      data-justify={justify}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

NavbarContent.displayName = "HeroUI.NavbarContent";

export default NavbarContent;
