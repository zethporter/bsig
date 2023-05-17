import { Libre_Bodoni, Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const libre_bodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

export { pacifico, libre_bodoni };
