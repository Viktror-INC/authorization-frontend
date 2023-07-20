"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Authorization from "@/components/Authorization";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Authorization children={children} />
        </body>
      </Provider>
    </html>
  );
}
