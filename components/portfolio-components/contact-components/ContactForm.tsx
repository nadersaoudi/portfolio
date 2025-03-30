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

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast({
        title: "Error: Something is wrong",
        description: "Please input your name and email to continue",
        variant: "destructive",
      });
      return;
    }
    const form = new FormData();
    const currentDateTime = new Date().toLocaleString();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Phone", formData.Phone);
    form.append("Address", formData.Address);
    form.append("Message", formData.Message);
    form.append("Service", formData.Service);
    form.append("DateTime", currentDateTime);

    try {
      setLoading(true);
      toast({
        title: "Message sending limit is finished",
        description:
          "You have finished 50/50 message sent limit from getform. Please enable pro mode to continue",
      });
      const response = await fetch("https://getform.io/f/adrnmzka", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSuccess(true);
        setStatus("Success! Your message has been sent.");
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
      }
    } catch (error) {
      console.error("Error!", error);
      setStatus("Error! Something went wrong.");
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
