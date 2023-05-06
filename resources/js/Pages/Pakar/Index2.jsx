// src/App.js
import React from "react";
import Table from "./Partials/Table";

// const getData = () => [
//   {
//     name: "Jane Cooper",
//     email: "jane.cooper@example.com",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     status: "Active",
//     role: "Admin",
//     imgUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Cody Fisher",
//     email: "cody.fisher@example.com",
//     title: "Product Directives Officer",
//     department: "Intranet",
//     status: "Active",
//     role: "Owner",
//     imgUrl:
//       "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Esther Howard",
//     email: "esther.howard@example.com",
//     title: "Forward Response Developer",
//     department: "Directives",
//     status: "Active",
//     role: "Member",
//     imgUrl:
//       "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jenny Wilson",
//     email: "jenny.wilson@example.com",
//     title: "Central Security Manager",
//     department: "Program",
//     status: "Active",
//     role: "Member",
//     imgUrl:
//       "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Kristin Watson",
//     email: "kristin.watson@example.com",
//     title: "Lean Implementation Liaison",
//     department: "Mobility",
//     status: "Active",
//     role: "Admin",
//     imgUrl:
//       "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Cameron Williamson",
//     email: "cameron.williamson@example.com",
//     title: "Internal Applications Engineer",
//     department: "Security",
//     status: "Active",
//     role: "Member",
//     imgUrl:
//       "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
// ];
export default function Index(props) {
    console.log(props);
    function createData(nomor, pertanyaan, ciri, kepribadian) {
        return { nomor, pertanyaan,ciri, kepribadian};
    }
    let rows = []
    let i = 1
    props.pertanyaans.forEach(pertanyaan => {
        rows.push(createData(i++,pertanyaan.pertanyaan, pertanyaan.ciri.ciri, props.kepribadians[pertanyaan.ciri.kepribadian_id - 1].jenis_kepribadian))
    });
const getData = () => {
    return rows
}
    console.log(getData())

  const columns = React.useMemo(
    () => [
      {
        Header: "Nomor",
        accessor: "nomor",
      },
      {
        Header: "Pertanyaan",
        accessor: "pertanyaan",
      },
      {
        Header: "Ciri-Ciri",
        accessor: "ciri",
      },
      {
        Header: "Kepribadian",
        accessor: "kepribadian",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="">
            <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1>
          </div>
          <div className="mt-4">
            <Table columns={columns} data={data} />
          </div>
        </main>
      </div>
    );
  }


