import type {KbdVariantProps, KbdSlots, SlotsToClasses} from "@vx-oss/heroui-v2-theme";
import type {HTMLHeroUIProps, PropGetter} from "@vx-oss/heroui-v2-system-rsc";
import type {ReactRef} from "@vx-oss/heroui-v2-react-utils";
import type {KbdKey} from "./utils";

import {mapPropsVariants} from "@vx-oss/heroui-v2-system-rsc";
import {kbd, cn} from "@vx-oss/heroui-v2-theme";
import {objectToDeps} from "@vx-oss/heroui-v2-shared-utils";
import {useMemo} from "react";

interface Props extends HTMLHeroUIProps<"kbd"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The key or keys to be displayed.
   */
  keys?: KbdKey | KbdKey[];
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Kbd classNames={{
   *    base:"base-classes",
   *    abbr: "abbr-classes", // the key wrapper
   *    content: "content-classes", // the children wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<KbdSlots>;
}

export type UseKbdProps = Props & KbdVariantProps;

export function useKbd(originalProps: UseKbdProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, kbd.variantKeys);

  const {as, children, className, keys, title, classNames, ...otherProps} = props;

  const Component = as || "kbd";

  const slots = useMemo(
    () =>
      kbd({
        ...variantProps,
      }),
    [objectToDeps(variantProps)],
  );

  const baseStyles = cn(classNames?.base, className);

  const keysToRender = typeof keys === "string" ? [keys] : Array.isArray(keys) ? keys : [];

  const getKbdProps: PropGetter = (props = {}) => ({
    ...otherProps,
    ...props,
    className: slots.base({class: cn(baseStyles, props.className)}),
  });

  return {Component, slots, classNames, title, children, keysToRender, getKbdProps};
}

export type UseKbdReturn = ReturnType<typeof useKbd>;
