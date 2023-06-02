import React from "react";
import Table from "./Table";
import { DataSaverOff } from "@mui/icons-material";

function App(props) {
    // console.log(props.datas)
    let datas = []
    let i = 1
    let col = []

    Object.values(props.datas).forEach(value => {
        col.push(value)
    })
    const [col1, col2, col3] = col

    const pertanyaans = col1
    const ciri_ciris = col2
    const kepribadians = col3

     // props.datas.forEach(column => {
    //     datas.push({
    //         'pertanyaan' : (column.pertanyaans).charAt(0).toUpperCase() + column.pertanyaan.slice(1),
    //     })
    //     i+=1
    // });
    pertanyaans.forEach(pertanyaan =>{
        datas.push({
            'pertanyaan' : pertanyaan
        })
    })
    ciri_ciris.forEach(ciriciri => {
        datas.push({
            'ciriciri' : ciriciri
        })
    })
    console.log(datas)
    

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
      },
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

  const data = React.useMemo(() => datas, []);

  return (
    <>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

export default App;