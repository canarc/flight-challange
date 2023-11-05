const theme = {
  rounding: 0,
  spacing: 20,
  defaultMode: "light",
  global: {
    colors: {
      brand: "#C70A0C",
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#EEEEEE",
        light: "#CCCCCC",
      },
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
      focus: "brand",
    },
    font: {
      family: "Helvetica",
      size: "15px",
      height: "20px",
      maxWidth: "300px",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
    select: {
      border: {
        radius: "0px",
      },
    },
    control: {
      border: {
        radius: "0px",
      },
    },
    drop: {
      border: {
        radius: "0px",
      },
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "3px",
      large: "10px",
      xlarge: "20px",
    },
    button: {
      border: {
        width: "1px",
        radius: "0px",
      },
      padding: {
        vertical: "3px",
        horizontal: "18px",
      },
    },
    checkBox: {
      check: {
        radius: "0px",
      },
      toggle: {
        radius: "0px",
        size: "40px",
      },
      size: "20px",
    },
    radioButton: {
      size: "20px",
      check: {
        radius: "0px",
      },
    },
  },
};

export default theme;
