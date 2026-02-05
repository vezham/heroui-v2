import type {MenuSectionSlots, SlotsToClasses} from "@vx-oss/heroui-v2-theme";
import type {SectionProps} from "@vx-oss/heroui-v2-aria-utils";
import type {DividerProps} from "@vx-oss/heroui-v2-divider";
import type {MenuItemProps} from "../menu-item";

import {BaseSection} from "@vx-oss/heroui-v2-aria-utils";

export interface MenuSectionBaseProps<T extends object = {}> extends SectionProps<"ul", T> {
  /**
   * The menu section classNames.
   */
  classNames?: SlotsToClasses<MenuSectionSlots>;
  /**
   * The menu items classNames.
   */
  itemClasses?: MenuItemProps["classNames"];
  /**
   * Shows a divider between sections
   * @default false
   */
  showDivider?: boolean;
  /**
   * Whether to hide the check icon when the items are selected.
   * @default false
   */
  hideSelectedIcon?: boolean;
  /**
   * The divider props
   */
  dividerProps?: DividerProps;
}

const MenuSectionBase = BaseSection as <T extends object>(
  props: MenuSectionBaseProps<T>,
) => JSX.Element;

export default MenuSectionBase;
