export type {
  As,
  DOMElement,
  DOMElements,
  CapitalizedDOMElements,
  DOMAttributes,
  OmitCommonProps,
  RightJoinProps,
  MergeWithAs,
  InternalForwardRefRenderFunction,
  PropsOf,
  Merge,
  HTMLHeroUIProps,
  PropGetter,
  ExtendVariantProps,
  ExtendVariantWithSlotsProps,
  ExtendVariants,
  SharedSelection,
} from "@vx-oss/heroui-v2-system-rsc";

export {
  forwardRef,
  toIterator,
  mapPropsVariants,
  mapPropsVariantsWithCommon,
  isHeroUIEl,
  extendVariants,
} from "@vx-oss/heroui-v2-system-rsc";

export type {HeroUIProviderProps} from "./provider";
export type {ProviderContextProps} from "./provider-context";

export {HeroUIProvider} from "./provider";
export {ProviderContext, useProviderContext} from "./provider-context";

export {useLabelPlacement} from "./hooks";

// wjdlz/NOTE: for @vx-oss/heroui-v2-ds
export {HeroUIProvider as VezhamProvider} from "./provider";
