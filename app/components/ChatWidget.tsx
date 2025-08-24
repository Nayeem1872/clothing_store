// app/components/ChatWidget.tsx
"use client";

import Script from "next/script";

export default function ChatWidget() {
  return (
    <Script
      src="http://localhost:3001/chat-widget.js"
      onLoad={() => {
        // The EmbedChatWidget is now available globally
        // and can be initialized.
        new (window as any).EmbedChatWidget();
      }}
    />
  );
}
