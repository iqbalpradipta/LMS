import Navbar from "../_component/navbar";
import "../style.css";

export const metadata = {
  title: "LMS - Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex bg-gray-50 text-gray-900 font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
