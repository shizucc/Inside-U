import React from "react";
import Table from "./Table";

function App(props) {
    console.log(props.datas)
    let datas = []
    let i = 1
    props.datas.forEach(ciri => {
        datas.push({
            'ciriciri' : (ciri.ciri).charAt(0).toUpperCase() + ciri.ciri.slice(1),
            'kepribadian' : ciri.kepribadian.jenis_kepribadian
        })
        i+=1
    });

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
      },
      {
        Header: "Ciri-Ciri",
        accessor: "ciriciri",
      },
      {
        Header: "Kepribadian Terkait",
        accessor: "kepribadian",
      },
    ],
    []
  );

  const data = React.useMemo(() => datas, []);

  return (
    <>
      <div>
        <Table columns={columns} data={data} route_for_edit={props.route_for_edit}/>
      </div>
    </>
  );
}

export default App;