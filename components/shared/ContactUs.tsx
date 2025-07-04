"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import SmallHaeder from "../SmallHaeder";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!form.current) {
      setIsSubmitting(false);
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred.",
      });
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
      reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { ease: "easeInOut", duration: 1 },
      }}
      viewport={{ once: true }}
      className="py-12 bg-white"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/contact-us.svg"
              alt="Contact Us"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <SmallHaeder title="Get In Touch" />
            <h2 className="text-4xl font-bold mb-6">Feel Free to Contact</h2>
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border-b-2 ${errors.name ? "border-red-500" : "border-gray-300"} focus:border-red-500 outline-none`}
                    placeholder="Enter Name"
                    {...register("name")}
                    name="name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 border-b-2 ${errors.email ? "border-red-500" : "border-gray-300"} focus:border-red-500 outline-none`}
                    placeholder="Enter Email"
                    {...register("email")}
                    name="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border-b-2 ${errors.phone ? "border-red-500" : "border-gray-300"} focus:border-red-500 outline-none`}
                    placeholder="Phone"
                    {...register("phone")}
                    name="phone"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border-b-2 ${errors.subject ? "border-red-500" : "border-gray-300"} focus:border-red-500 outline-none`}
                    placeholder="Subject"
                    {...register("subject")}
                    name="subject"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  className={`w-full px-4 py-3 border-b-2 ${errors.message ? "border-red-500" : "border-gray-300"} focus:border-red-500 outline-none`}
                  rows={1}
                  placeholder="Your Message"
                  {...register("message")}
                  name="message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all duration-300 disabled:bg-gray-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Contact Us +"}
              </button>
              {submitStatus && (
                <p
                  className={`text-sm mt-4 ${submitStatus.success ? "text-green-500" : "text-red-500"}`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
