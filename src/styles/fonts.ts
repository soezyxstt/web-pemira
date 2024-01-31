import localFont from "next/font/local";

const header = localFont({
  src: "fonts/PropagationRegular.ttf",
  display: "swap",
  variable: "--font-header",
});
const body = localFont({
  src: "/fonts/TangoSans.ttf",
  display: "swap",
  variable: "--font-body",
});
const bodyBold = localFont({
  src: "/fonts/TangoSans_Bold.ttf",
  variable: "--font-body-bold",
});
const bodyBoldItalic = localFont({
  src: "/fonts/TangoSans_BoldItalic.ttf",
  variable: "--font-body-bold-italic",
});
const bodyItalic = localFont({
  src: "/fonts/TangoSans_Italic.ttf",
  variable: "--font-body-italic",
});

export { header, body, bodyBold, bodyBoldItalic, bodyItalic };
