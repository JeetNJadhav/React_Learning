type Props = {
  onNext: () => void;
  onPrev: () => void;
};

export const CarouselContols = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </>
  );
};
