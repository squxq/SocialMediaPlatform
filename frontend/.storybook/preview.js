import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import { dark } from "../src/definitions/styled-components/dark";
import { light } from "../src/definitions/styled-components/light";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const lightTheme = {
  name: "LIGHT",
  ...light,
};

const darkTheme = {
  name: "DARK",
  ...dark,
};

export const getAllThemes = () => {
  return [lightTheme, darkTheme];
};

addDecorator(withThemesProvider(getAllThemes()));
