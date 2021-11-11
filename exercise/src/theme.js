const sizes = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

const theme = {
  videoBackground: "rgba(255, 255, 255, 0.3)",
  devices: {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    desktop: `(max-width: ${sizes.desktop})`,
  },
  grayscaleColor: {
    level01: "#999999",
    level02: "#666666",
    level03: "#333333",
  },
  primary: "#316AF1",
  transparentBg: "rgba(255, 255, 255, 0.808)",
};

export default theme;
