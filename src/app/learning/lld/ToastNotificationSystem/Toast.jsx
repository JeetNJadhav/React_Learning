import { useEffect } from "react";

export const Toast = ({ toast, removeToast }) => {

    useEffect(()=>{
        const timerID = setTimeout(() => {
            removeToast(toast.id)
        }, 3000)

        return () => clearTimeout(timerID)
    },[])

  return (
    <div className="toast">
      <h3>{`${toast.message} - id: ${toast.id}`}</h3>
      <button onClick={() => removeToast(toast.id)}>remove</button>
    </div>
  );
};
