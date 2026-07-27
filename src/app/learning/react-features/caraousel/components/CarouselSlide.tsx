type Props = {
  children: React.ReactNode;
};

export const CarouselSlide = ({ children }: Props) => {
  return (
    <div
      style={{
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        background: "#f2f2f2",
      }}
    >
      {children}
    </div>
  );
};
