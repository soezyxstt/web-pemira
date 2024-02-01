import localFont from "next/font/local";

const header = localFont({
  src: "fonts/PropagationRegular.ttf",
  display: "swap",
});
const body = localFont({
  src: "/fonts/TangoSans.ttf",
  display: "swap",
});
const bodyBold = localFont({
  src: "/fonts/TangoSans_Bold.ttf",
});
const bodyBoldItalic = localFont({
  src: "/fonts/TangoSans_BoldItalic.ttf",
});
const bodyItalic = localFont({
  src: "/fonts/TangoSans_Italic.ttf",
});

export { header, body, bodyBold, bodyBoldItalic, bodyItalic };
