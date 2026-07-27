import { useContext } from "react";
import { ToastContext } from "./ToastContext";

export const useToast = () => {
  const toast = useContext(ToastContext);

  if (!toast) throw new Error("useToast must be inside the toast provider");

  return toast;
};
