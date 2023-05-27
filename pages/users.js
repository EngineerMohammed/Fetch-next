

export default function Userslist({ users }) {
  return (
    <>
      <h1>users list</h1>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProp() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response.status);
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
