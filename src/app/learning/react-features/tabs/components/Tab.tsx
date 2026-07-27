type Props = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const Tab = ({ label, isActive, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 12px",
        cursor: "pointer",
        border: "none",
        borderBottom: isActive ? "2px solid black" : "2px solid transparent",
        background: "transparent",
        fontWeight: isActive ? "bold" : "normal",
      }}
    >
      {label}
    </button>
  );
};
