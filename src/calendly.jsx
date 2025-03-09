// src/pages/BookingPage.jsx
import { InlineWidget } from "react-calendly";

export const Calendly = () => {
  return (
    <div className="min-h-screen flex bg-black flex-col items-center justify-center  p-6">
      <h1 className="text-3xl font-semibold text-white mb-6">
        Book a Discovery Call
      </h1>
      <InlineWidget
        url="https://calendly.com/nomanafzaltatla117/ask-me-anything" // Replace with your Calendly link
        styles={{
          height: '600px',
          width: '100%',
          maxWidth: '800px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
};
