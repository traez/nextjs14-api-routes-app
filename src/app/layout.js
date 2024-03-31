import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Next.js Form Project",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="font-trebuchetMs text-[14px]">
      <body className="w-full min-h-screen ">
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
