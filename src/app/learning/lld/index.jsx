import { useEffect, useState } from "react";
import { useToast } from "./ToastNotificationSystem/useToast";
import { CommentThread as CommentRecursive } from "./NestedCommentsRecursive/CommentThread";
import { CommentThread as CommentNormalise } from "./NestedCommentNormalizeState/CommentThread";
import { Toast } from "./ToastNotificationSystem/Toast";
import { Comment } from "./NestedCommentsRecursive/Comment";
import { lldConfig } from "../data/lldComponents";

const LLDPage = () => {
  const toast = useToast();

  const [selected, setSelected] = useState(lldConfig[0].id);

  const currentComponent = (id) => {
    const newSelected = lldConfig.find((item) => item.id === id);
    setSelected(newSelected.id);
  };

  const selectedItem = lldConfig.find(item => item.id === selected);
  const Component = selectedItem.component;

  return (
    <div className="lldParent">
      <div className="lldLeftChild">
        <h1>LLD</h1>
        {lldConfig.map((item) => (
          <div>
            <button key={item.id} onClick={() => currentComponent(item.id)} style={{color: selected === item.id ?"blue" : "red"}}>
              {item.label}
            </button>
          </div>
        ))}
      </div>
      <div className="lldRightChild">
        <Component />        
      </div>      
    </div>
  );
};

export default LLDPage;
