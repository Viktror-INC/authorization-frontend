"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Authorization from "@/components/Authorization";
import { colors } from "@/shared/styles/colors";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`h-screen bg-slate-900`}>
          <Authorization children={children} />
        </body>
      </Provider>
    </html>
  );
}
