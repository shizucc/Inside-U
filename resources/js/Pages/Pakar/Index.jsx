import TableIndex from "./Partials/TableIndex"
import SidebarPakar from "./SidebarPakar"

export default function Index(props){
  // console.log(props.columns)
  
  const data = JSON.stringify(props.columns)
  const columns = JSON.parse(data)

  const pertanyaans = columns.pertanyaans
  const ciri_ciris = columns.ciri_ciris
  const kepribadians = columns.kepribadians

  const col = pertanyaans.map((pertanyaan,index)=>({
      pertanyaan,
      ciri_ciri:ciri_ciris[index],
      kepribadian:kepribadians[index]
  }))

  return(<>
    <SidebarPakar username = {props.auth.user.username} >
      <TableIndex 
          datas={col}
          route_for_show={''}
          route_for_edit={'pakar.kepribadian.edit'}
          route_for_update={'pakar.kepribadian.update'}
          route_for_delete={'pakar.kepribadian.destroy'}
      />
    </SidebarPakar>
  </>)
}