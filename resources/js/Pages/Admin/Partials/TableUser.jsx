import React from "react";
import Table from "./Table";


function App(props) {
    let datas = []
    let i = 1
    props.datas.forEach(user => {
        datas.push({
            'id' : user.id,
            'username' : (user.username).charAt(0).toUpperCase() + user.username.slice(1),
            'email' : user.email,
            'waktu_dibuat' : user.created_at
        })
        i+=1
    });

  const columns = React.useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Waktu Dibuat",
        accessor: "waktu_dibuat",
      },
    ],
    []
  );

  const data = datas
    console.log(data)
  return (
    <>
      <div>
        <Table 
          signature={'user'}
          columns={columns} 
          data={data} 
          route_for_edit={props.route_for_edit} 
          route_for_delete={props.route_for_delete}
          message_where_delete = {props.message_where_delete}
        />
      </div>
    </>
  );
}

export default App;