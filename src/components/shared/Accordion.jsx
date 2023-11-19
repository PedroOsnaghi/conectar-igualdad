import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { FaAngleDown } from "react-icons/fa6";
import { Card } from "./Card";

export const AccordionWrapper = Accordion.Root;

const AccordionHeader = React.forwardRef(function AccordionTrigger(
  { children, className, src, alt = "", ...props },
  forwardedRef
) {
  return (
    <Accordion.Header
      className={`bg-darkSecondary w-full cursor-pointer overflow-hidden  py-3 pr-[30px] ${className}`}
    >
      <Accordion.Trigger
        className="w-full flex justify-between gap-2 group items-center"
        {...props}
        ref={forwardedRef}
      >
        <div className="flex gap-2 text-left">
          <img src={src} alt={alt} />
          {children}
        </div>
        <span className="text-lightPrimary bg-darkTerciary p-3 grid place-items-center rounded-[9px] border-[1px] border-lightSecondary">
          <FaAngleDown
            className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </span>
      </Accordion.Trigger>
    </Accordion.Header>
  );
});

AccordionHeader.displayName = "AccordionHeader";

const AccordionContent = React.forwardRef(function AccordionContent(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <Accordion.Content
      className={`bg-darkTerciary acordeon ${className}`}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Content>
  );
});

AccordionContent.displayName = "AccordionContent";

const AccordionCard = React.forwardRef(
  ({ children, className, name, ...props }, forwardedRef) => (
    <Card.Root name={name} className="flex acordeon">
      <Accordion.Item
        className={`w-full z-10  ${className}`}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Item>
    </Card.Root>
  )
);

AccordionCard.displayName = "AccordionCard";

export { Accordion, AccordionHeader, AccordionContent, AccordionCard };
