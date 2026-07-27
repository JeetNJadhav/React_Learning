type Props = {
  id: string;
  title: string;
  content: string;
  isOpen: boolean | null;
  onToggle: (id: string) => void;
};

export const AccordionItem = ({
  id,
  title,
  content,
  onToggle,
  isOpen,
}: Props) => {
  return (
    <>
      <button onClick={() => onToggle(id)}>{title}</button>
      {isOpen && <div>{content}</div>}
    </>
  );
};

// doubts
// when to write onClick={() => } and when to write onClick={setState} and
// when onClick={functionName}
