import { useEffect } from "react";

const OnlyJS = () => {
  const reduceData = ["a", "b", "c", "b", "c"];
  const data2 = ["a", "b", "c", "b", "c"];
  const data1 = [[1, 2], [3, 4], [5]];
  const users = [
    { name: "A", active: true, role: "admin" },
    { name: "B", active: false, role: "user" },
    { name: "C", active: true, role: "admin" },
  ];
  const users2 = [
    { name: "A", active: true, role: "admin" },
    { name: "B", active: false, role: "user" },
    { name: "C", active: true, role: "admin" },
  ];

  const res = reduceData.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const grpUsers = users.reduce((acc, cur) => {
    if (!acc[cur.role]) acc[cur.role] = [];
    acc[cur.role].push(cur);
    return acc;
  }, {});

  useEffect(() => {
    data2.customForEach((num, i) => console.log(num, i));
    data2.customMap((num, i) => console.log("Map: ", num, i));
  }, []);

  return (
    <div>
      <h2>For Javascript concepts</h2>
      <h3>Reduce example..</h3>
      <p>{JSON.stringify(res)}</p>
      <h2>Falttening array</h2>
      <p>{data1.reduce((acc, curr) => acc.concat(curr), [])}</p>
      <p>{data1.flat()}</p>
      <h2>Get names of active users</h2>
      <p>{users.filter((i) => i.active).map((i) => i.name)}</p>

      <h3>Complex reduce</h3>
      <h2>Group users by role</h2>
      <p>{JSON.stringify(grpUsers)}</p>

      <h3>Polyfills Examples</h3>
      <p>for each polyfills: check useEffect and console logs</p>
      <p>
        Map example:
        {data2.customMap((num, i) => (
          <p key={i}>{num.toUpperCase()}</p>
        ))}
      </p>
      <p>
        Filter example:
        {users2
          .customFilter((ele, i) => ele.active)
          .customMap((item, i) => (
            <span>{item.name}</span>
          ))}
      </p>
    </div>
  );
};

export default OnlyJS;
