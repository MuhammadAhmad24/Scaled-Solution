import { notFound } from "next/navigation";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Scaled Solutions - Cloud | Data | AI | Product Development",
  description: "Smart, Scaleable, Secure That's Cloud With Us",
  icons: {
    icon: "/icons/favicon.ICO",
  },
};

export default function RootLayout({ children, params }) {
  //  GET THE CURRENT LOCALE
  // const locale = useLocale();
  // Show 404 Error if language not found
  // if (params.locale !== locale) {
  //   notFound();
  // }

  return (
      <html >
        <body className={urbanist.className}>{children}</body>
      </html>
  );
}
