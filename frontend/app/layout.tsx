import Navbar from "./_component/navbar";
import "./style.css"

export const metadata = {
  title: 'E-Learning with Iqbal'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
