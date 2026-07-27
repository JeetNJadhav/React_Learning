import { useCallback, useMemo, useState } from "react";
import { ToastContext } from "./ToastContext";
import { ToastContainer } from "./ToastContainer";

const defaultVisibleCount = 3;

export function ToastProvider({ children }) {
  const [toastState, setToastState] = useState({
    visibleToasts: [],
    queuedToasts: [],
  });

  const showToast = useCallback((message) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
    };

    setToastState((prev) => {
      if (prev.visibleToasts.length < defaultVisibleCount) {
        return {
          ...prev,
          visibleToasts: [...prev.visibleToasts, newToast],
        };
      }

      return {
        ...prev,
        queuedToasts: [...prev.queuedToasts, newToast],
      };
    });
  }, []);

  const removeToast = useCallback((id) => {
    setToastState((toastState) => {
    const wasVisible = toastState.visibleToasts.some((toast) => toast.id === id)
    const visibleToasts = toastState.visibleToasts.filter((toast) => toast.id !== id)
    const queuedToasts = toastState.queuedToasts.filter((toast) => toast.id !== id)

    if(!wasVisible || queuedToasts.length === 0){
      return {visibleToasts, queuedToasts}
    }

    const [nextToast, ...remainingToast] = queuedToasts

    return{
      visibleToasts: [...visibleToasts, nextToast],
      queuedToasts: remainingToast
    }})
  }, []);

  const toastValues = useMemo(
    () => ({
      showToast,
      removeToast,
      visibleToasts: toastState.visibleToasts
    }),
    [showToast, removeToast, toastState.visibleToasts],
  );

  return (
    <ToastContext.Provider value={toastValues}>
      {children}
      <ToastContainer/>
    </ToastContext.Provider>
  );
}
