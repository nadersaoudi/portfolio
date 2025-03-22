import React from "react";

import ContactForm from "@/components/portfolio-components/ContactForm";

import Container from "@/components/Container";

import { Mail, MapPinCheck, Phone } from "lucide-react";

const infoData = [
  { title: "Phone", description: "(+216) 29 630 345", icon: <Phone /> },
  { title: "Email", description: "saoudi.nader7@gmail.com", icon: <Mail /> },
  {
    title: "Address",
    description: "City el khadhra, Tunisie",
    icon: <MapPinCheck />,
  },
];

const ContactPage = () => {
  return (
    <Container className="py-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="w-full md:w-2/3">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-4 md:gap-8">
          {infoData?.map((item) => (
            <div key={item?.title} className="flex items-center space-x-4">
              <span className="bg-lightSky p-4 rounded-[4px]">
                {item?.icon}
              </span>
              <div>
                <h3 className="text-white/60 text-sm font-semibold">
                  {item?.title}
                </h3>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
