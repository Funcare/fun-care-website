"use client";

import { useState } from "react";
import { MessageCircle, X, Calendar, Clock, User, Mail, Phone, Building } from "lucide-react";
import { bookMeeting } from "../utils/api";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredDate: "",
    preferredTime: "",
    meetingType: "consultation",
    message: "",
  });

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();

      // Check if reply contains booking token
      const hasBookingToken = data.reply.includes("[BOOK_MEETING]");
      const cleanReply = data.reply.replace("[BOOK_MEETING]", "").trim();

      const aiMessage = { sender: "ai", text: cleanReply, showBookingForm: hasBookingToken };
      setMessages((prev) => [...prev, aiMessage]);
      
      // Show booking form if token detected
      if (hasBookingToken) {
        setShowBookingForm(true);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);

    try {
      await bookMeeting(bookingForm);
      
      // Add success message
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Thank you! Your meeting request has been submitted successfully. Our team will reach out to you soon to confirm the details.",
        },
      ]);
      
      // Reset form and hide it
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        preferredDate: "",
        preferredTime: "",
        meetingType: "consultation",
        message: "",
      });
      setShowBookingForm(false);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "I apologize, but there was an error submitting your booking request. Please try again or contact us directly at funcareinstitute@gmail.com",
        },
      ]);
    } finally {
      setBookingLoading(false);
    }
  };

  const handleBookingFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-coral text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center 
                     hover:bg-peach transition transform hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle size={24} className="sm:w-8 sm:h-8" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="w-[calc(100vw-2rem)] sm:w-80 h-[calc(100vh-8rem)] sm:h-96 max-h-[600px] bg-cream shadow-2xl rounded-2xl flex flex-col border border-peach 
                     animate-fadeIn fixed bottom-4 right-4 sm:bottom-6 sm:right-6 sm:relative sm:bottom-auto sm:right-auto"
        >
          {/* Header */}
          <div
            className="bg-gradient-to-r from-peach to-coral text-white p-3 sm:p-4 flex justify-between 
                       items-center rounded-t-2xl shadow-md"
          >
            <span className="font-semibold text-sm sm:text-base">FunCare AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="hover:text-yellow transition p-1"
              aria-label="Close chat"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Messages */}
<div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-2 sm:space-y-3">
  {messages.map((msg, i) => {
    const isAI = msg.sender === "ai";

    // Look for button token in AI messages: [PROGRAM_BUTTON:/path|Label]
    let buttonPath = null;
    let buttonLabel = null;
    let cleanText = msg.text;

    if (isAI) {
      const match = msg.text.match(
        /\[PROGRAM_BUTTON:([^|\]]+)\|([^\]]+)\]/
      );
      if (match) {
        buttonPath = match[1];
        buttonLabel = match[2];
        cleanText = msg.text.replace(match[0], "").trim();
      }
    }

    return (
      <div
        key={i}
        className={`p-2 sm:p-3 rounded-xl max-w-[85%] sm:max-w-[80%] text-xs sm:text-sm shadow-sm ${
          msg.sender === "user"
            ? "bg-teal text-white ml-auto"
            : "bg-white text-gray-800 border border-gray-300"
        }`}
      >
          {/* INLINE BUTTON SUPPORT */}
        {(() => {
          // If there is a token, split the text into segments around it
          if (buttonPath) {
            const tokenRegex = new RegExp(`\\[PROGRAM_BUTTON:${buttonPath}\\|${buttonLabel}\\]`, "g");
            const segments = msg.text.split(tokenRegex);

            return (
              <div className="flex flex-wrap items-center gap-1 whitespace-pre-line">
                {segments.map((segment, index) => (
                  <span key={index} className="text-gray-800">
                    {segment}
                  </span>
                ))}

                {/* Inline button */}
                <button
                  onClick={() => (window.location.href = buttonPath)}
                  className="bg-teal text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow hover:bg-teal/80 transition inline-block text-xs sm:text-sm"
                >
                  {buttonLabel}
                </button>
              </div>
            );
          }

          // No button token — render normal text
          return (
            <div className="mb-2 whitespace-pre-line text-gray-800">
              {cleanText}
            </div>
          );
        })()}
        
        {/* Show booking form button if message has booking intent */}
        {msg.showBookingForm && !showBookingForm && (
          <button
            onClick={() => setShowBookingForm(true)}
            className="mt-2 bg-gradient-to-r from-coral to-peach text-white px-3 py-2 rounded-lg shadow hover:opacity-90 transition text-xs sm:text-sm flex items-center gap-2"
          >
            <Calendar size={14} />
            Book a Meeting
          </button>
        )}
      </div>
    );
  })}

  {loading && (
    <div className="text-gray-500 text-xs sm:text-sm italic">AI is typing…</div>
  )}
</div>

          {/* Booking Form */}
          {showBookingForm && (
            <div className="p-3 sm:p-4 bg-white border-t border-gray-300 max-h-96 overflow-y-auto">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-sm sm:text-base text-gray-800 flex items-center gap-2">
                  <Calendar size={16} />
                  Book a Meeting
                </h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={16} />
                </button>
              </div>
              
              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-700 mb-1 flex items-center gap-1">
                    <User size={12} />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleBookingFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-coral focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-700 mb-1 flex items-center gap-1">
                    <Mail size={12} />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleBookingFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-coral focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-700 mb-1 flex items-center gap-1">
                    <Phone size={12} />
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleBookingFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-coral focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-700 mb-1 flex items-center gap-1">
                    <Building size={12} />
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={bookingForm.company}
                    onChange={handleBookingFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-coral focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-700 mb-1 flex items-center gap-1">
                      <Calendar size={12} />
                      Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={bookingForm.preferredDate}
                      onChange={handleBookingFormChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-coral focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-700 mb-1 flex items-center gap-1">
                      <Clock size={12} />
                      Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={bookingForm.preferredTime}
                      onChange={handleBookingFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-coral focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-700 mb-1">Meeting Type *</label>
                  <select
                    name="meetingType"
                    value={bookingForm.meetingType}
                    onChange={handleBookingFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-coral focus:border-transparent"
                  >
                    <option value="consultation">Consultation</option>
                    <option value="program-inquiry">Program Inquiry</option>
                    <option value="custom-workshop">Custom Workshop</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleBookingFormChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-coral focus:border-transparent"
                    placeholder="Tell us what you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={bookingLoading}
                  className="w-full bg-gradient-to-r from-coral to-peach text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold"
                >
                  {bookingLoading ? "Submitting..." : "Submit Booking Request"}
                </button>
              </form>
            </div>
          )}

          {/* Input */}
          <div className="p-2 sm:p-3 border-t border-gray-300 flex gap-2 bg-white rounded-b-2xl">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border border-gray-300 bg-gray-100 rounded-xl p-2 sm:p-2.5 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="bg-teal text-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl hover:bg-teal/80 transition text-sm sm:text-base whitespace-nowrap"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}