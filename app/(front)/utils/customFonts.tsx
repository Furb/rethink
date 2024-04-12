import localFont from "next/font/local";

const satoshi = localFont({
  // The path to the Satoshi font file to load
  src: "../fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

export { satoshi };
