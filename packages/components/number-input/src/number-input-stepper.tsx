import type {AriaButtonProps} from "@react-types/button";
import type {ButtonProps} from "@vx-oss/heroui-v2-button";

import {Button} from "@vx-oss/heroui-v2-button";
import {ChevronUpIcon, ChevronDownIcon} from "@vx-oss/heroui-v2-shared-icons";

export interface NumberInputStepperProps extends Omit<ButtonProps, keyof AriaButtonProps> {
  direction: "up" | "down";
}

const NumberInputStepper = ({direction, ...otherProps}: NumberInputStepperProps) => {
  return (
    <Button disableRipple isIconOnly {...otherProps}>
      {direction == "up" ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </Button>
  );
};

NumberInputStepper.displayName = "HeroUI.NumberInputStepper";

export default NumberInputStepper;
