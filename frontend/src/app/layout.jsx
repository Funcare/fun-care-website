// app/layout.jsx
import "../styles/globals.css";
import ChatWidget from "../components/AIChatWidget"; 

export const metadata = {
  title: "FunCare Institute",
  description: "Workplace Joy. Leadership with Heart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-teal font-sans antialiased overflow-x-hidden">
        {children}

        {/* AI Helper always visible */}
        <div className="fixed bottom-6 right-6 z-50">
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}