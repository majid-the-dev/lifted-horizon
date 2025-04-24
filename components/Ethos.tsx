import React from "react";
import Image from "next/image";
import BG from "@/public/assets/asset-05.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Ethos = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:items-center md:gap-8">
          <div className="flex items-center justify-end order-1 md:order-1">
            <Image
              src={BG}
              alt="Lifted Horizon"
              className="size-[100%] md:size-[85%]"
            />
          </div>

          <div>
            <div className="max-w-lg md:max-w-none space-y-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl/tight">
                Principles in Action, <br /> Results in Motion
              </h2>

              <p className="text-gray-700 text-sm font-medium">
                Driven by a passion for excellence and anchored in unwavering
                integrity, our ethos at Lifted Horizon is more than just
                words—it&apos;s the engine behind every success story.
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-gray-50 border border-gray-200/40 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-sm font-bold">
                    Work Hard
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    We leverage expertise, leading-edge tools and unwavering
                    diligence to deliver results of the highest quality.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="bg-gray-50 border border-gray-200/40 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-sm font-bold">
                    Be Kind
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Collaboration thrives in an environment of respect and
                    ethical conduct. We treat every stakeholder—clients,
                    partners and colleagues—with empathy and fairness.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="bg-gray-50 border !border-b border-gray-200/40 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-sm font-bold">
                    Outstanding Service
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Going beyond the brief, we anticipate challenges, tailor our
                    approach and respond swiftly to evolving needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ethos;
