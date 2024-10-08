"use client"
import React from "react";

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body
          className={`antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }
  