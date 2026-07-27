import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../services/tasks";
import Posts from "../../../shared/stores/ZustandStore/components/posts";


const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["tasks"],
  //   queryFn: fetchUsers,
  // });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error fetching tasks.</p>;

  return (
    <>
      <h1>Home Page. </h1>
      <h2>Tasks ..</h2>

      {data?.map((items) => (
        <div key={items.id}>
          <p>
            {items.title} - {items.status}
          </p>
        </div>
      ))}


      <div><h2>Zustand</h2>
      <Posts /></div>
    </>
  );
};

export default Home;
