import type {HTMLHeroUIProps} from "@vx-oss/heroui-v2-system";

import {forwardRef} from "@vx-oss/heroui-v2-system";
import {useDOMRef} from "@vx-oss/heroui-v2-react-utils";
import {cn} from "@vx-oss/heroui-v2-theme";

import {useCardContext} from "./card-context";

const CardBody = forwardRef<"div", HTMLHeroUIProps<"div">>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const bodyStyles = cn(classNames?.body, className);

  return (
    <Component ref={domRef} className={slots.body?.({class: bodyStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardBody.displayName = "HeroUI.CardBody";

export default CardBody;
