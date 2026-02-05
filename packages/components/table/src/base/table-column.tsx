import type {HTMLHeroUIProps} from "@vx-oss/heroui-v2-system";
import type {SpectrumColumnProps} from "@react-types/table";

import {Column} from "@react-stately/table";

export type TableColumnProps<T> = Omit<SpectrumColumnProps<T>, "showDivider"> &
  Omit<HTMLHeroUIProps<"th">, keyof SpectrumColumnProps<T>>;

const TableColumn = Column as <T>(props: TableColumnProps<T>) => JSX.Element;

export default TableColumn;
