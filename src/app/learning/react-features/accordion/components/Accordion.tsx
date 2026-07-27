import { useState } from "react";
import type { AccordionTypes } from "../types";
import { AccordionItem } from "./AccordionItem";

type Props = {
  items: AccordionTypes[];
};

export const Accordion = ({ items }: Props) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {items.map((item) => (
        <div>
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            onToggle={handleToggle}
            isOpen={openId === item.id}
          />
        </div>
      ))}
    </>
  );
};
