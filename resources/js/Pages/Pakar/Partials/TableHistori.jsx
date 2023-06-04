import React from "react";
import Table from "./Table";
import { DataSaverOff } from "@mui/icons-material";

function App(props) {
  // console.log(props.datas)
  let datas = []
  let i = 1
  


  props.datas.forEach(col => {
    datas.push({
      'pertanyaan': (col.pertanyaan).charAt(0).toUpperCase() + col.pertanyaan.slice(1),
      'ciriciri': (col.ciri_ciri).charAt(0).toUpperCase() + col.ciri_ciri.slice(1),
      'kepribadian': (col.kepribadian).charAt(0).toUpperCase() + col.kepribadian.slice(1),
    })
  });




  const columns = React.useMemo(
    () => [
      {
        Header: "Pertanyaan",
        accessor: "pertanyaan",
      },
      {
        Header: "Ciri-Ciri",
        accessor: "ciriciri",
      },
      {
        Header: "Kepribadian",
        accessor: "kepribadian",
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
        signature={'index'}
        columns={columns} 
        data={data} 
        route_for_edit={"pakar.index"}
        route_for_delete={"pakar.index"}
        />
      </div>
    </>
  );
}

export default App;