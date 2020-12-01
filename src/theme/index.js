import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import merge from "lodash/merge";
import palette from "./palette";

const defaultTheme = createMuiTheme({
  spacing: 8,
});
const tabWidth = defaultTheme.spacing(3);
const SARTheme = createMuiTheme({
  palette,
  spacing: 4,
  typography: {
    fontSize: "0.875rem",
    lineHeight: "1.3745rem",
    robotoFont: ["Roboto", "Arial", "Arial Narrow", "san serif"],
    robotoFontCondensed: [
      "Roboto Condensed",
      "Arial",
      "Arial Narrow",
      "san serif",
    ],
    h1: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "1.875rem", //30px
      lineHeight: "3.57rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "1.5rem", //24px
      lineHeight: "3rem",
      fontWeight: 500,
    },
    h3: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "1.125rem", //18px
      lineHeight: "1.3125rem", //21px
      fontWeight: 500,
    },
    h4: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "1rem", //16px
      lineHeight: "2.14rem",
      fontWeight: 500,
    },
    h5: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.875rem", //14px
      lineHeight: "1rem",
      fontWeight: 500,
    },
    h6: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.75rem", //12px
      lineHeight: "1.57rem",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    subtitle1: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.857rem", //14px
      lineHeight: "1.428rem",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    subtitle2: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.857rem",
      lineHeight: "1.428rem",
      fontWeight: 400,
    },
    body1: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.875rem", //14px
      lineHeight: "1.57rem",
      fontWeight: 400,
    },
    body2: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.75rem", //12px
      lineHeight: "1rem",
      fontWeight: 400,
      color: palette.darkBlueGrey[900],
    },
    caption: {
      fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
      fontSize: "0.75rem", //12px
      lineHeight: "1rem",
      fontWeight: 400,
      color: palette.grey[600],
    },
    button: {
      fontSize: "0.875rem", //14px
      lineHeight: "1rem !important", //16px
      textTransform: "capitalize",
    },
  },
  overrides: {
    MuiContainer: {
      maxWidthXl: {
        paddingLeft: defaultTheme.spacing(1),
        paddingRight: defaultTheme.spacing(1),
      },
    },
    MuiPaper: {
      root: {
        border: "none",
        padding: defaultTheme.spacing(1.5),
        margin: defaultTheme.spacing(1),
      },
      outlined: {
        border: "none",
        padding: 0,
        margin: 0,
        borderBottomStyle: "solid",
        borderBottomWidth: ".5px",
        borderBottomColor: palette.grey[600],
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: palette.primary.contrastText,
        margin: 0,
      },
    },
    MuiBox: {
      root: {
        padding: 0,
      },
    },
    MuiInput: {
      fontSize: ".625rem",
      underline: {
        "&:after": {
          borderBottomColor: palette.byBlue[800]
        },
        "&$disabled": {
          "&:before": {
            borderBottomStyle: "solid",
          },
        },
      },
      formControl: {
        "label + &": {
          marginTop: `${defaultTheme.spacing(6)}px`,
        }
      }
    },
    MuiInputBase: {
      input: {
        padding: `${defaultTheme.spacing(2)}px 0 !important`,
        fontSize: `0.875rem !important`,
        lineHeight: `1rem !important`,
        border: "0 !important",
        color: `${palette.darkBlueGrey[800]} !important`,
        height: "auto",
        "&$disabled": {
          color: "#3F475680 !important",
          background: `${palette.primary.contrastText} !important`,
        },
      },
      inputMarginDense: {
        padding: defaultTheme.spacing(0.2),
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: "0.875rem",
        color: `${palette.grey[600]} !important`,
        "&$disabled": {
          background: "none",
        },
        "&$focused": {
          color: palette.byBlue[800],
        },
      }
    },
    MuiList: {
      root: {
        margin: defaultTheme.spacing(-1.5),
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiTypography: {
      colorTextPrimary: {
        color: palette.primary.textColor,
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        "&$selected": {
          backgroundColor: `#00B7F11A !important`,
        },
      },
      button: {
        "&:hover": {
          backgroundColor: `#00B7F11A !important`,
          fontWeight: "bold",
        },
      },
      container: {
        font: "Roboto Condensed",
        color: palette.grey[600],
        fontSize: "1rem",
        "&:hover": {
          "& span": {
            fontWeight: "500",
            color: palette.blue[800],
          },
        },
      },
    },
    PrivateSwitchBase: {
      root: {
        padding: defaultTheme.spacing(0.25),
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1.5rem",
      }
    },
    MuiIconButton: {
      root: {
        padding: defaultTheme.spacing(2),
        color: palette.grey[400],
        fontSize: "0.875rem", //14px
        lineHeight: "1rem !important", //16px
        "&:hover": {
          backgroundColor: "none",
          color: palette.blue[800],
        },
      },
      colorPrimary: {
        color: palette.blue[800],
        "&:hover": {
          backgroundColor: "none",
        },
      },
      colorSecondary: {
        "&:hover": {
          backgroundColor: "none",
        },
      },
      fontSizeInherit: {
        fontSize: "0.875rem", //14px
        lineHeight: "1rem", //16px
      },
      fontSizeSmall: {
        fontSize: "0.75rem", //12px
        lineHeight: "0.875rem", //14px
      },
      fontSizeLarge: {
        fontSize: "1rem", //16px
        lineHeight: "1.125rem", //14px
      },
    },
    MuiIcon: {
      root: {
        color: `${palette.grey[600]} !important`,
        fontSize: "1.5rem", //20px
        lineHeight: "1.375rem", //22px
        width: "auto",
        height: "auto",
        padding: defaultTheme.spacing(2),
        img: {
          display: "block",
        },
        "&:hover": {
          cursor: "pointer",
          color: palette.byBlue[800],
          borderRadius: '50%',
          background: `${defaultTheme.palette.common.black}00010`
        },
      },
      colorPrimary: {
        color: palette.primary.contrastText,
        "&:hover": {
          color: "inherit",
        },
      },
      colorSecondary: {
        color: palette.darkBlueGrey[900],
        "&:hover": {
          color: "inherit",
        },
      },
      colorAction: {
        color: palette.byBlue[800],
        "&:hover": {
          color: "inherit",
        },
      },
      colorTextPrimary: {
        color: palette.grey[400],
        "&:hover": {
          color: palette.byBlue[800],
        },
      },
      colorError:{
        color: palette.red[600],
        "&:hover": {
          color: palette.red[800],
        },
      },
      fontSizeSmall: {
        fontSize: "1rem", //16px
        lineHeight: "1.125rem", //18px
      },
      fontSizeLarge: {
        fontSize: "1.5rem", //24px
        lineHeight: "1.625rem", //26px
      },
      colorDisabled: {
        color: palette.grey[400],
      },
    },
    textField: {
      [`& fieldset`]: {
        borderRadius: 0,
      },
    },
    MuiSelect: {
      root: {
        fontSize: "0.875rem",
      },
      selectMenu: {
        borderRadius: "4px",
        backgroundColor: palette.primary.contrastText,
        paddingLeft: 10,
        "&:focus": {
          borderRadius: "4px",
          backgroundColor: palette.primary.contrastText,
        },
      },
      icon: {
        fontSize: "1.5rem"
      }
    },
    MuiButton: {
      root: {
        borderRadius: defaultTheme.spacing(1),
        fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
        fontWeight: 500,
        padding: `${defaultTheme.spacing(2) - 1}px ${defaultTheme.spacing(
          4
        )}px`,
        margin: `${defaultTheme.spacing(2)}px`,
        boxShadow: "none",
        minWidth: "auto",
        "&:hover": {
          backgroundColor: "inherit",
        },
      },
      // <Button variant="contained" color="primary" />
      containedPrimary: {
        color: palette.primary.contrastText,
        backgroundColor: palette.byBlue[800],
        boxShadow: "none",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: palette.byBlue[800],
        "&:hover": {
          backgroundColor: palette.byBlue[900],
          boxShadow: "none",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: palette.byBlue[800],
        },
        "&$disabled": {
          color: palette.primary.contrastText,
          backgroundColor: palette.grey[400],
          borderColor: palette.grey[400],
        }
      },
      // <Button variant="contained" color="secondary" />
      containedSecondary: {
        color: palette.primary.contrastText,
        backgroundColor: "transparent",
        boxShadow: "none",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: palette.primary.contrastText,
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: palette.primary.contrastText,
        },
        "&$disabled": {
          color: palette.primary.contrastText,
          backgroundColor: palette.grey[400],
          borderColor: palette.grey[400],
        }
      },
      outlined: {
        padding: `${defaultTheme.spacing(2) - 1}px ${defaultTheme.spacing(
          4
        )}px`,
      },
      // <Button variant="outlined" color="primary" />
      outlinedPrimary: {
        background: palette.primary.contrastText,
        color: palette.byBlue[800],
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: palette.byBlue[800],
        "&:hover": {
          backgroundColor: "inherit",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: palette.byBlue[800],
        },
        "&$disabled": {
          color: palette.grey[400],
          backgroundColor: palette.primary.contrastText,
          borderColor: palette.grey[400],
        }
      },
      // <Button variant="outlined" color="secondary" />
      outlinedSecondary: {
        background: palette.primary.contrastText,
        color: palette.darkBlueGrey[900],
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: palette.grey[200],
        "&:hover": {
          backgroundColor: "inherit",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: palette.darkBlueGrey[900],
        },
        "&$disabled": {
          color: palette.grey[400],
          backgroundColor: palette.primary.contrastText,
          borderColor: palette.grey[400],
        }
      },
      // <Button variant="text" color="primary" />
      textPrimary: {
        color: palette.byBlue[800],
        padding: 0,
        "&:hover": {
          backgroundColor: "inherit",
          textDecoration: "underline",
        },
      },
      // <Button variant="text" color="secondary" />
      textSecondary: {
        color: palette.darkBlueGrey[900],
        padding: 0,
        "&:hover": {
          backgroundColor: "inherit",
          textDecoration: "underline",
        },
      },
      // <Button size="small/medium/large">
      sizeSmall: {
        fontSize: "0.75rem", //12px
        lineHeight: "0.875rem !important", //14px
        padding: `${defaultTheme.spacing(2) - 1}px ${defaultTheme.spacing(
          2
        )}px`,
      },
      sizeLarge: {
        fontSize: "1rem", //16px
        lineHeight: "1.25rem !important", //18px
        padding: `${defaultTheme.spacing(2) - 1}px ${defaultTheme.spacing(
          4
        )}px`,
      },
      outlinedSizeSmall: {
        padding: `${defaultTheme.spacing(2) - 1}px ${defaultTheme.spacing(
          2
        )}px !important`,
      },
      outlinedSizeLarge: {
        padding: `${defaultTheme.spacing(2) - 1}px ${defaultTheme.spacing(
          4
        )}px !important`,
      },
      textSizeSmall: {
        padding: "0 !important",
      },
      textSizeLarge: {
        padding: "0 !important",
      },
      iconSizeSmall: {
        fontSize: "0.75rem", //12px
        lineHeight: "0.875rem", //14px
        "& > *:first-child": {
          fontSize: "0.75rem",
        },
      },
      iconSizeMedium: {
        fontSize: "0.875rem", //14px
        lineHeight: "1rem", //16px
        "& > *:first-child": {
          fontSize: "0.875rem", //14px
          lineHeight: "1rem", //16px
        },
      },
      iconSizeLarge: {
        fontSize: "1rem", //16px
        lineHeight: "1.125rem", //18px
        "& > *:first-child": {
          fontSize: "1rem", //16px
          lineHeight: "1.125rem", //18px
        },
      },
    },
    MuiButtonGroup: {
      root: {
        borderRadius: defaultTheme.spacing(0.5),
        margin: `${defaultTheme.spacing(1)}px ${defaultTheme.spacing(0.5)}px`,
        fontFamily: ["Roboto Condensed", "Arial", "Arial Narrow", "san serif"],
        fontWeight: 400,
        "&:hover": {
          backgroundColor: "inherit",
        },
      },
      groupedOutlinedHorizontal: {
        background: palette.primary.contrastText,
        color: palette.byBlue[800],
        border: `1px solid ${palette.byBlue[800]}`,
        "&:not(:last-child)": {
          borderRightColor: "none",
          "&:hover": {
            backgroundColor: "transparent",
            border: `1px solid ${palette.byBlue[800]}`,
          },
        },
        "&:not(:first-child)": {
          "&:hover": {
            border: `1px solid ${palette.byBlue[800]}`,
          },
        },
        "&:hover": {
          backgroundColor: "transparent",
          border: `1px solid ${palette.byBlue[800]}`,
        },
        "&$disabled": {
          background: palette.primary.contrastText,
          border: `1px solid ${palette.grey[400]}`,
          color: palette.grey[400],
        },
      },
    },
    MuiAutocomplete: {
      paper: {
        padding: 0,
      },
      clearIndicator: {
        padding: 0,
      },
      popupIndicator: {
        color: "rgba(0, 0, 0, 0.54)", //Todo - get appropriate color from palette
      },
    },
    MuiPickersDay: {
      day: {
        color: `${palette.text.primary} !important`,
        "&:hover": {
          backgroundColor: "rgba(4, 122, 188, 0.1)", //Todo - get appropriate color from palette
        }
      },
      daySelected: {
        color: `${palette.primary.contrastText} !important`,
        backgroundColor: palette.byBlue[800],
        "&:hover": {
          backgroundColor: palette.byBlue[800],
        }
      },
      dayDisabled: {
        color: `${palette.grey[400]} !important`
      }
    },
    MuiTable: {
      root: {
        fontFamily: "Roboto Condensed",
      },
    },
    MuiTableRow: {
      root: {
        borderBottom: `1px solid ${palette.grey[200]}`,
        "&$selected": {
          backgroundColor: palette.byBlue[600],
        },
        "&$hover": {
          "&:hover": {
            backgroundColor: palette.blue[50],
          },
        },
      },
    },
    MuiTableHead: {
      root: {
        borderBottom: `1px solid ${palette.grey[500]}`,
      },
    },
    MuiTableCell: {
      root: {
        fontFamily: "Roboto Condensed",
        borderBottom: 0,
      },
      sizeSmall: {
        padding: `${defaultTheme.spacing(0.5)}px ${defaultTheme.spacing(2)}px`,
      },
    },
    MuiTabs: {
      root: {
        color: palette.grey[600],
        minHeight: 24,
        zIndex: 1000,
        marginBottom: -1,
      },
      indicator: {
        height: 0,
      },
      scrollButtons: {
        color: palette.grey[800],
        width: 16,
      },
    },
    MuiTab: {
      root: {
        color: palette.darkBlueGrey[900],
        fontFamily: ["Roboto Condensed", "Arial", "san-serif"],
        fontSize: "0.875rem !important",
        lineHeight: "1.375rem",
        textTransform: "none",
        fontWeight: 400,
        padding: `0 ${defaultTheme.spacing(1)}px`,
        borderBottom: `1px solid ${palette.grey[300]}`,
        [defaultTheme.breakpoints.up("xs")]: {
          minWidth: defaultTheme.spacing(3),
        },
        "&$selected": {
          color: palette.grey[800],
          fontFamily: ["Roboto Condensed", "Arial", "san-serif"],
          fontWeight: 700,
          borderBottom: `2px solid ${palette.byBlue[800]}`,
          [defaultTheme.breakpoints.up("xs")]: {
            minWidth: defaultTheme.spacing(3),
          },
          "&:hover": {
            color: palette.grey[800],
          },
        },
      },
      textColorInherit: {
        color: palette.darkBlueGrey[900],
        opacity: 1,
        "&:hover": {
          color: palette.byBlue[800],
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: palette.grey[900],
        opacity: "0.5 !important",
      },
    },
    MuiRadio: {
      root: {
        fontSize: "1.5rem",
        padding: "9px",
        color: "#3F4756", //Todo - get appropriate color from palette
        "&:hover": {
          backgroundColor: "rgba(4, 122, 188, 0.1)", //Todo - get appropriate color from palette
        }
      },
      colorPrimary: {
        color: "#3F4756", //Todo - get appropriate color from palette
        "&$checked": {
          color: palette.byBlue[800],
          "&:hover": {
            backgroundColor: "rgba(4, 122, 188, 0.1)", //Todo - get appropriate color from palette
          }
        },
        "&$disabled": {
          color: "#3F475680", //Todo - get appropriate color from palette
          "&:hover": {
            backgroundColor: "none",
          }
        },
      },
    },
    MuiCheckbox: {
      root: {
        fontSize: "1.5rem",
        padding: "9px",
        color: "rgba(0, 0, 0, 0.54)", //Todo - get appropriate color from palette
        "&:hover": {
          backgroundColor: "rgba(4, 122, 188, 0.1)", //Todo - get appropriate color from palette
          color: "rgba(0, 0, 0, 0.54)", //Todo - get appropriate color from palette
        }
      },
      colorPrimary: {
        "&$checked": {
          color: palette.byBlue[800],
          "&:hover": {
            backgroundColor: "rgba(4, 122, 188, 0.1)", //Todo - get appropriate color from palette
          }
        }
      },
      indeterminate: {
        color: palette.byBlue[800]
      },
      checked: {
        color: palette.byBlue[800]
      },
      disabled: {
        color: palette.grey[400]
      },
    },

    MuiPagination: {
      root: {       
        '& .Mui-selected': {   
          color: palette.byBlue[800],    
          backgroundColor: "transparent",
          fontWeight: 700,
        },
        '& .Mui-selected:hover': {        
          backgroundColor: "transparent",
        }
      }
    },

    MuiInputLabel: {
      root: {
        fontFamily: ["Roboto", "Arial", "Arial Narrow", "san serif"],
        fontSize: "0.875rem",
        lineHeight: "1.57rem",
        fontWeight: 400,
        color: palette.grey[500]
      },
      asterisk: {
        color: palette.red[500],
      },
      shrink: {
        transform: "none",
      },
    },
    MuiNativeSelect: {
      icon: {
        fontSize: "1.25rem",
      },
    },
    MuiLink: {
      root: {
        color: palette.secondary.main,
      },
    },
    MuiInputAdornment: {
      positionEnd: {
        marginLeft: 5,
      },
    },
    MuiTouchRipple: {
      root: {
        display: "none",
      },
    },
    MuiDivider: {
      root: {
        marginTop: "20px",
        marginBottom: "20px",
      },
    },
    MuiSlider: {
      root: {
        color: palette.primary.textColor,
        height: 8,
      },
      thumb: {
        height: 20,
        width: 20,
        backgroundColor: palette.primary.contrastText,
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
      },
      track: {
        height: 5,
        borderRadius: 4,
      },
      rail: {
        height: 3,
        borderRadius: 2,
        color: palette.grey[600],
      },
    },
    MuiDialog: {
      paper: {
        padding: `0px ${defaultTheme.spacing(2)}px`,
      },
    },
    MuiDialogTitle: {
      root: {
        padding: defaultTheme.spacing(2),
        "& h2": {
          fontSize: "1rem"
        },
        "& > .MuiBox-root": {
          display: "flex",
          alignItems: "center",
          "& .MuiBox-root:first-child": {
            flexGrow: 1,
            "& h5": {
              fontSize: "1.125rem"
            }
          },
          "& .MuiBox-root:last-child": {
            "& .MuiIconButton-root:hover": {
              backgroundColor: `${defaultTheme.palette.common.black}00010`
            }
          }
        }
      },
    },
    MuiDialogContent:{
      root: {
        padding:`0px ${defaultTheme.spacing(2)}px`,
        overflowY: 'hidden',
      }
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: defaultTheme.spacing(2),
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "1rem",
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
        fontWeight: 400,
        lineHeight: '1.4em',
        backgroundColor: palette.darkBlueGrey[800]
      },
      tooltipArrow: {
        backgroundColor: palette.darkBlueGrey[800]
      }
    },
    MuiToolbar: {
      gutters: {
        [defaultTheme.breakpoints.up("xs")]: {
          paddingLeft: defaultTheme.spacing(4),
          paddingRight: defaultTheme.spacing(4),
        },
      },
    },
    MuiOutlinedInput: {
      "&$notchedOutline": {
        borderStyle: "solid",
        borderWidth: 0,
        borderColor: palette.byBlue[700],
      },
    },
  },
  props: {
    MuiPopover: {
      disableEnforceFocus: true
    },
    MuiDialog: {
      disableEnforceFocus: true
    },
    MuiModal: {
      disableEnforceFocus: true
    }
  }
});

export const modalStyles = makeStyles((theme) => ({
  modalWindow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    left: "30%",
    zIndex: "100 !important"
  },
  modalHead: {
    color: palette.darkBlueGrey[900],
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    backgroundColor: palette.primary.contrastText,
    borderBottom: `1px solid ${palette.grey[300]}`,
  },
  modalBody: {
    backgroundColor: palette.background.paper,
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
  },
  modalGrid: {
    paddingBottom: theme.spacing(1),
  },
  modalFooter: {
    backgroundColor: palette.background.paper,
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    borderTop: `1px solid ${palette.grey[300]}`,
  },
  modal: {
    outline: 0,
    borderRadius: theme.spacing(1),
    border: `${theme.spacing(1)}px solid ${palette.background.paper}`,
  },
  modalGrid: {
    paddingBottom: theme.spacing(2),
  },
}));

export default SARTheme;
export const ThemeAsContext = React.createContext(SARTheme);
export function withSARTheme(custom) {
  const finalTheme = merge({}, SARTheme, custom || {});
  return (Component) => {
    return (props) => (
      <ThemeProvider theme={finalTheme}>
        <Component {...props}></Component>
      </ThemeProvider>
    );
  };
}
