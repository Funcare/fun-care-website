import "../styles/globals.css";

export const metadata = {
  title: "FunCare Institute",
  description: "Workplace Joy. Leadership with Heart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-oliveLight text-violet font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}