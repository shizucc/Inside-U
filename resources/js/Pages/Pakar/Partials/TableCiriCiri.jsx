import React from "react"
import Table from './Table'

export default function TableCiriCiri(props){
    
    const getData = () => props.datas
    const fields = props.fields

    let headers = []
    Array.from(fields).forEach(field => {
        headers.push(
            {
                Header: field.charAt(0).toUpperCase() + field.slice(1),
                accessor: field
            }
        )
    })
    const data = React.useMemo(()=>getData(), [])
    console.log(data)
    return(
        <>
            <Table columns={headers} data={data}></Table>
        </>
    )
}