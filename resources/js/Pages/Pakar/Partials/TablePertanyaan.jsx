import React from "react";
import Table from "./Table";

function App(props) {
    let datas = []
    let i = 1
    props.datas.forEach(pertanyaan => {
        datas.push({
            'id' : pertanyaan.id,
            'pertanyaan' : (pertanyaan.pertanyaan).charAt(0).toUpperCase() + pertanyaan.pertanyaan.slice(1),
            'ciriciri' : pertanyaan.ciri.ciri.charAt(0).toUpperCase() + pertanyaan.ciri.ciri.slice(1),
        })
        i+=1
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
    ],
    []
  );

  const data = datas;

  return (
    <>
      <div>
        <Table 
          signature = {'pertanyaan'}
          columns={columns} 
          data={data} 
          route_for_edit={props.route_for_edit} 
          route_for_delete={props.route_for_delete} 
          message_where_delete={props.message_where_delete}
        />
      </div>
    </>
  );
}

export default App;