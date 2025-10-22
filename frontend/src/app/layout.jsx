import "../styles/globals.css";

export const metadata = {
  title: "FunCare Institute",
  description: "Workplace Joy. Leadership with Heart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-gray-800 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}