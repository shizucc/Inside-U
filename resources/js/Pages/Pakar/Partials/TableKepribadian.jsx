import React from "react";
import Table from "./Table";

function App(props) {
    let datas = []
    let i = 1
    props.datas.forEach(kepribadian => {
        datas.push({
            'id' : kepribadian.id,
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

  const data = datas

  return (
    <>
      <div>
        <Table 
          signature = {'kepribadian'}
          columns={columns} 
          data={data} 
          route_for_edit={props.route_for_edit} 
          route_for_delete={props.route_for_delete}
        />
      </div>
    </>
  );
}

export default App;
