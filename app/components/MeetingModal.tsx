"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  X,
  Send,
  Building,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MeetingModal = ({ isOpen, onClose }: MeetingModalProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    meetingType: "consultation",
    preferredDate: "",
    preferredTime: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.preferredDate ||
      !formData.preferredTime
    ) {
      setErrorMessage("Please fill in all required fields");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStep(3);
        setTimeout(() => {
          onClose();
          setStep(1);
          setSubmitStatus("idle");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            meetingType: "consultation",
            preferredDate: "",
            preferredTime: "",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            message: "",
          });
        }, 3000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.error || "Failed to schedule meeting. Please try again."
        );
      }
    } catch (error) {
      console.error("Error scheduling meeting:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name.trim() || !formData.email.trim())) {
      setErrorMessage("Please fill in your name and email");
      setSubmitStatus("error");
      return;
    }
    setStep(step + 1);
    setSubmitStatus("idle");
    setErrorMessage("");
  };

  const prevStep = () => {
    setStep(step - 1);
    setSubmitStatus("idle");
    setErrorMessage("");
  };

  const meetingTypes = [
    {
      value: "consultation",
      label: "General Consultation",
      duration: "30 minutes",
    },
    {
      value: "project-discussion",
      label: "Project Discussion",
      duration: "45 minutes",
    },
    {
      value: "pricing-review",
      label: "Pricing Review",
      duration: "30 minutes",
    },
    {
      value: "factory-tour",
      label: "Virtual Factory Tour",
      duration: "60 minutes",
    },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6" />
                  <h2 className="text-xl font-bold">Schedule a Meeting</h2>
                </div>

                {/* Progress bar */}
                <div className="flex gap-2 mt-4">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        step >= num ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Your Information
                      </h3>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="bg-gray-50 dark:bg-gray-800"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          className="bg-gray-50 dark:bg-gray-800"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          <Building className="w-4 h-4 inline mr-2" />
                          Company Name
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="bg-gray-50 dark:bg-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="bg-gray-50 dark:bg-gray-800"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Meeting Details */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Meeting Details
                      </h3>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Meeting Type
                        </label>
                        <select
                          name="meetingType"
                          value={formData.meetingType}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        >
                          {meetingTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label} ({type.duration})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Preferred Date *
                        </label>
                        <Input
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={today}
                          className="bg-gray-50 dark:bg-gray-800"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          <Clock className="w-4 h-4 inline mr-2" />
                          Preferred Time *
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                          required
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <p className="text-xs text-gray-500 mt-1">
                          Time zone: {formData.timezone}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Additional Message
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your requirements, goals, or any specific topics you'd like to discuss..."
                          rows={3}
                          className="bg-gray-50 dark:bg-gray-800"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Success */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Meeting Scheduled Successfully!
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        We've received your meeting request and will send you a
                        confirmation email shortly.
                      </p>

                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-left">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Meeting Details:
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <p>
                            <strong>Date:</strong> {formData.preferredDate}
                          </p>
                          <p>
                            <strong>Time:</strong> {formData.preferredTime} (
                            {formData.timezone})
                          </p>
                          <p>
                            <strong>Type:</strong>{" "}
                            {
                              meetingTypes.find(
                                (t) => t.value === formData.meetingType
                              )?.label
                            }
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                    >
                      <p className="text-red-800 dark:text-red-300 text-sm">
                        {errorMessage}
                      </p>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  {step < 3 && (
                    <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {step > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1"
                        >
                          Previous
                        </Button>
                      )}

                      {step < 2 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          Next
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                              Scheduling...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Schedule Meeting
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MeetingModal;
