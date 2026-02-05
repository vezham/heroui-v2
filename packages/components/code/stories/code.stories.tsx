import type {Meta} from "@storybook/react";

import {code} from "@vx-oss/heroui-v2-theme";

import {Code} from "../src";

export default {
  title: "Components/Code",
  component: Code,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
  },
} as Meta<typeof Code>;

const defaultProps = {
  children: "npm install @vx-oss/heroui-v2-react",
  ...code.defaultVariants,
};

export const Default = {
  args: {
    ...defaultProps,
  },
};
