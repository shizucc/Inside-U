import TableIndex from "./Partials/TableIndex"
import SidebarPakar from "./SidebarPakar"

export default function Index(props){
  // console.log(props.columns)
  
  const data = JSON.stringify(props.columns)
  // console.log(data)
  const columns = JSON.parse(data)

  const pertanyaans = columns.pertanyaans
  const ciri_ciris = columns.ciri_ciris
  const kepribadian = columns.kepribadian

  console.log(ciri_ciris)
  // const dataInTable = pertanyaans.map((pertanyaan,index)=>({
  //     pertanyaan,
  //     ciri_ciri : ciri_ciri[index],
  //     kepribadian: kepribadian[index]
  // }))
  // console.log(dataInTable)
  return(<>
    <SidebarPakar username = {props.auth.user.username} >
      <TableIndex 
          datas={props.columns}
          route_for_edit={'pakar.kepribadian.edit'}
          route_for_update={'pakar.kepribadian.update'}
          route_for_delete={'pakar.kepribadian.destroy'}
      />
    </SidebarPakar>
  </>)
}