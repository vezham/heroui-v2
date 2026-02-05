import type {CodeVariantProps} from "@vx-oss/heroui-v2-theme";
import type {HTMLHeroUIProps, PropGetter} from "@vx-oss/heroui-v2-system-rsc";
import type {ReactRef} from "@vx-oss/heroui-v2-react-utils";

import {code} from "@vx-oss/heroui-v2-theme";
import {mapPropsVariants} from "@vx-oss/heroui-v2-system-rsc";
import {useMemo} from "react";
import {objectToDeps} from "@vx-oss/heroui-v2-shared-utils";

export interface UseCodeProps extends HTMLHeroUIProps<"code">, CodeVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export function useCode(originalProps: UseCodeProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, code.variantKeys);

  const {as, children, className, ...otherProps} = props;

  const Component = as || "code";

  const styles = useMemo(
    () =>
      code({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  const getCodeProps: PropGetter = () => {
    return {
      className: styles,
      ...otherProps,
    };
  };

  return {Component, children, getCodeProps};
}

export type UseCodeReturn = ReturnType<typeof useCode>;
