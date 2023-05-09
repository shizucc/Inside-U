import ManajemenLayout from "./Partials/ManajemenLayout"

export default function ManajemenCiriCiri(props){

  return(
      <>
      <h1>Hello World</h1>
      {/* {props.ciri_ciris ? props.ciri_ciris.map(ciri_ciri => {
          return(
              <div key={ciri_ciri.id}>
                  <h2>Ciri : {ciri_ciri.ciri}</h2>
                  <p>Jenis kepribadian : {ciri_ciri.kepribadian.jenis_kepribadian}</p>
              </div>
          )
      }) : null
  } */}
      <ManajemenLayout
        fields = {['pertanyaan','ciri-ciri','kepribadian']}
        datas = {[
          props.columns.pertanyaans,
          props.columns.ciri_ciris,
          props.columns.kepribadians
        ]
        }
      />
      </>
  )
}