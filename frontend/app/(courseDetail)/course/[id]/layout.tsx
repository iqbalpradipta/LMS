import Sidebar from "@/app/_component/_courseDetailComponent/sidebar";
import "../../../style.css";

export const metadata = {
  title: "E-Learning with Iqbal",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
