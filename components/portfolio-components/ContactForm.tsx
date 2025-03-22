"use client";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SuccessMsg from "./SuccessMsg";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
    Service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !formData.Name.trim() ||
      !formData.Email.trim() ||
      !formData.Message.trim()
    ) {
      toast({
        title: "Error",
        description: "Please enter your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setStatus("Success! Your message has been sent.");
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
          variant: "default",
        });

        // Reset form
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
          Service: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
        toast({
          title: "Error",
          description: data.error || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error!", error);
      setStatus("Error! Something went wrong.");
      toast({
        title: "Error",
        description: "Something went wrong while sending your message.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Let&#39;s work together
      </h3>
      <p className="text-white/60 text-sm md:text-base">
        Contact me for web development, or branding services.
      </p>
      {success ? (
        <SuccessMsg status={status} />
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Name"
                name="Name"
                required
                placeholder="Your name"
                value={formData.Name}
                onChange={handleChange}
              />
              <Input
                type="email"
                id="Email"
                name="Email"
                required
                placeholder="Email address"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Phone"
                name="Phone"
                placeholder="Phone number"
                value={formData.Phone}
                onChange={handleChange}
              />
              <Input
                type="text"
                id="Address"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                onChange={handleChange}
              />
            </div>

            <Textarea
              name="Message"
              placeholder="Text here"
              value={formData.Message}
              onChange={handleChange}
              rows={5}
            />

            <Select onValueChange={handleSelectChange} value={formData.Service}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-bodyColor text-white border-white/20">
                <SelectGroup>
                  <SelectLabel>Services</SelectLabel>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button
            disabled={isLoading}
            onClick={handleSubmit}
            type="submit"
            className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
          >
            {isLoading ? "Submitting..." : "Send Message"}
          </Button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
