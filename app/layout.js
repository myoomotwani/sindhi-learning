import {Fredoka} from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({subsets: ["latin"]});

export const metadata = {
  title: "Sindhi Learning",
  description: "Learn Sindhi by giving quizzes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
