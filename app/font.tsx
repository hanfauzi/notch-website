import localFont from "next/font/local";

export const newOrder = localFont({
  src: [
    {
      path: "../public/fonts/NewOrder_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NewOrder_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NewOrder_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NewOrder_Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/NewOrder_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neworder",
});