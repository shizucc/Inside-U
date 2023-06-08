import React from "react";
import Table from "./Table";

function App(props) {
  let datas = []
  let i = 1
  


  props.datas.forEach(col => {
    datas.push({
      'user_id' : col.user_id,
      'diagnosa_id' : col.diagnosa_id,
      'username': (col.nama).charAt(0).toUpperCase() + col.nama.slice(1),
      'waktu_diagnosa': col.waktu_diagnosa,
      'hasil': (col.hasil).charAt(0).toUpperCase() + col.hasil.slice(1),
    })
  });




  const columns = React.useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "waktu_diagnosa",
        accessor: "waktu_diagnosa",
      },
      {
        Header: "hasil",
        accessor: "hasil",
      },
    ],
    []
  );

  const data = datas
  return (
    <>
      <div>
        <Table 
        signature={'history'}
        columns={columns} 
        data={data} 
        route_for_show={props.route_for_show}
        />
      </div>
    </>
  );
}

export default App;