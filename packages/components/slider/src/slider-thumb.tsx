import type {UseSliderThumbProps} from "./use-slider-thumb";

import {forwardRef} from "@vx-oss/heroui-v2-system";
import {Tooltip} from "@vx-oss/heroui-v2-tooltip";
import {renderFn} from "@vx-oss/heroui-v2-react-utils";
import {VisuallyHidden} from "@react-aria/visually-hidden";

import {useSliderThumb} from "./use-slider-thumb";

export interface SliderThumbProps extends UseSliderThumbProps {}

const SliderThumb = forwardRef<"div", SliderThumbProps>((props, ref) => {
  const {
    Component,
    index,
    renderThumb,
    showTooltip,
    getTooltipProps,
    getThumbProps,
    getInputProps,
  } = useSliderThumb({
    ...props,
    ref,
  });

  const thumbProps = {
    ...getThumbProps(),
    index,
    children: (
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
    ),
  };

  const content = renderFn({
    Component,
    props: thumbProps,
    renderCustom: renderThumb,
  }) as React.ReactElement;

  return showTooltip ? <Tooltip {...getTooltipProps()}>{content}</Tooltip> : content;
});

SliderThumb.displayName = "HeroUI.SliderThumb";

export default SliderThumb;
