// api/tasks.ts
export const fetchTasks = async () => {
  await new Promise((res) => setTimeout(res, 1000)); // simulate delay

  return [
    { id: 1, title: "Learn React", status: "pending" },
    { id: 2, title: "Build Project", status: "completed" },
    { id: 3, title: "Revise Redux", status: "pending" },
  ];
};
