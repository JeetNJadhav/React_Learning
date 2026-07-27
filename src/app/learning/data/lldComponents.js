
import { CommentThread as CommentNormalise } from "../lld/NestedCommentNormalizeState/CommentThread"; 
import MachineCoding1 from "../lld/MC01SearchableSortable/MachineCoding1";
import { CommentThread as CommentRecursive } from "../lld/NestedCommentsRecursive/CommentThread"; 
import { ToastComponent } from "../lld/ToastNotificationSystem";



export const lldConfig = [
  {
    id: 0,
    label: "Normalize nested comments",
    component: CommentNormalise,
  },
  {
    id: 1,
    label: "Recursive nested comments",
    component: CommentRecursive,
  },
  {
    id: 2,
    label: "Toasts",
    component: ToastComponent,
  },
  {
    id: 3,
    label: "Machine Coding 1",
    component: MachineCoding1,
  },
];