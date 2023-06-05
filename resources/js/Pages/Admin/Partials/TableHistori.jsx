import React from "react";
import Table from "./Table";
import { DataSaverOff } from "@mui/icons-material";

function App(props) {
  // console.log(props.datas)
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
  console.log(data)
  return (
    <>
      <div>
        <Table 
        signature={'history'}
        columns={columns} 
        data={data} 
        route_for_show={props.route_for_show}
        route_for_delete={props.route_for_delete}
        />
      </div>
    </>
  );
}

export default App;