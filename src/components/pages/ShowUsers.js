import React from "react";

const ShowUsers = ({users}) => {
  

  return (
    <section className="pt-4">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user,i)=>{
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ShowUsers;
