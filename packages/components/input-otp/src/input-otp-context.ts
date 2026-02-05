import type {UseInputOtpReturn} from "./use-input-otp";

import {createContext} from "@vx-oss/heroui-v2-react-utils";

export const [InputOtpProvider, useInputOtpContext] = createContext<UseInputOtpReturn>({
  name: "InputOtpContext",
  errorMessage:
    "useInputOtpContext: `context` is undefined. Seems like you forgot to wrap all input-otp components within `<InputOtp />`",
});
