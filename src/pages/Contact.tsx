import type React from "react"

import { useState, type FormEvent, useRef } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

// Define types for form data and status
type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      setFormStatus("submitting")

      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Validate credentials
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials are missing. Please check your environment variables.")
      }

      // Send email using EmailJS
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)

      console.log("Email sent successfully:", result.text)
      setFormStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Failed to send email:", error)
      setFormStatus("error")

      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("An unknown error occurred")
      }

      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <div className="p-8 md:p-16 lg:p-24 relative min-h-[calc(100vh-72px)]">
      {/* Background Text */}
      <div className="absolute top-0 left-0 text-[#2a2a2a] text-[180px] font-bold leading-none z-0 select-none">
        CONTACT
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff7b72]">Get In Touch</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg">
              Feel free to reach out if you have any questions or want to work together on a project.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center mr-4">
                  <Mail className="text-[#ff7b72]" size={18} />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Email</h3>
                  <p>saurabh91798@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center mr-4">
                  <Phone className="text-[#ff7b72]" size={18} />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Phone</h3>
                  <p>+91 9770603366</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center mr-4">
                  <MapPin className="text-[#ff7b72]" size={18} />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Location</h3>
                  <p>Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#ff7b72] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#ff7b72] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#ff7b72] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2a2a2a] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Send Me a Message</h2>

            {/* Status Messages */}
            {formStatus === "success" && (
              <div className="mb-4 p-3 bg-green-900/30 border border-green-500 text-green-300 rounded flex items-center">
                <CheckCircle className="mr-2" size={18} />
                Your message has been sent successfully!
              </div>
            )}

            {formStatus === "error" && (
              <div className="mb-4 p-3 bg-red-900/30 border border-red-500 text-red-300 rounded flex items-center">
                <AlertCircle className="mr-2" size={18} />
                {errorMessage || "Failed to send message. Please try again."}
              </div>
            )}

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-[#1e1e1e] border border-gray-700 rounded focus:outline-none focus:border-[#ff7b72]"
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-[#1e1e1e] border border-gray-700 rounded focus:outline-none focus:border-[#ff7b72]"
                  disabled={formStatus === "submitting"}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-[#1e1e1e] border border-gray-700 rounded focus:outline-none focus:border-[#ff7b72]"
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-2 bg-[#1e1e1e] border border-gray-700 rounded focus:outline-none focus:border-[#ff7b72]"
                  disabled={formStatus === "submitting"}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-2 px-4 bg-[#ff7b72] text-white rounded flex items-center justify-center hover:bg-[#ff6b62] transition-colors disabled:opacity-70"
              >
                {formStatus === "submitting" ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

