import { Toast } from "./Toast";
import { useToast } from "./useToast";

export const ToastContainer = () => {

  const { visibleToasts, removeToast } = useToast();
  return (
    <div className="toast-container">
      {visibleToasts.map((toasts) => {
        return <Toast key={toasts.id} toast={toasts} removeToast={removeToast}/>
      })}
    </div>
  );
};
