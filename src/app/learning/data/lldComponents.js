
import { CommentThread as CommentNormalise } from "../lld/NestedCommentNormalizeState/CommentThread"; 
import MachineCoding1 from "../lld/MC01SearchableSortable/MachineCoding1";
import { CommentThread as CommentRecursive } from "../lld/NestedCommentsRecursive/CommentThread"; 
import { ToastComponent } from "../lld/ToastNotificationSystem";
import AutoCompleteSearch from "../lld/MC02AutocompleteSearch/Page";



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
    label: "Machine Coding 1 Searchable and Sortable",
    component: MachineCoding1,
  },
  {
    id: 4,
    label: "Machine Coding 2 AutoComplete Search",
    component: AutoCompleteSearch,    
  },
];