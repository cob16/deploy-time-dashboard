import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import {colours} from "../src/style";

const darkWithPalateColours = themes.dark

darkWithPalateColours.barTextColor = colours.primary
darkWithPalateColours.textColor = colours.primary
darkWithPalateColours.colorPrimary = colours.primary
darkWithPalateColours.barTextColor = colours.primary

darkWithPalateColours.appBg = colours.shapeUnimportant
darkWithPalateColours.colorSecondary = colours.shapeUnimportant

darkWithPalateColours.appContentBg = colours.background
darkWithPalateColours.textInverseColor = colours.background

addons.setConfig({
    theme: darkWithPalateColours,
});