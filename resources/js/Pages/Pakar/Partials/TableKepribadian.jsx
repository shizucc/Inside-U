import React from "react";
import Table from "./Table";

function App(props) {
    console.log(props.datas)
    let datas = []
    let i = 1
    props.datas.forEach(kepribadian => {
        datas.push({
            'kepribadian' : (kepribadian.jenis_kepribadian).charAt(0).toUpperCase() + kepribadian.jenis_kepribadian.slice(1),
            'deskripsi' : kepribadian.deskripsi.charAt(0).toUpperCase() + kepribadian.deskripsi.slice(1),
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
        Header: "Kepribadian",
        accessor: "kepribadian",
      },
      {
        Header: "Deskripsi",
        accessor: "deskripsi",
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