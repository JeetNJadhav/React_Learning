import { useToast } from "./useToast";


export const ToastComponent = () => {
    const toast = useToast();
  return (
    <div>
      <h3>Toast Example</h3>
      <button onClick={() => toast.showToast("Hello")}>Hello</button>
    </div>
  );
};
