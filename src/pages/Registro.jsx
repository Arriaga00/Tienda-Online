import Formulario from "../components/Formulario"

const Registro = () => {
  return (
    <>
    <section className=" flex justify-center items-center bg-white flex-wrap" style={{ position: "fixed", width: "100%", top: "0", zIndex: "30" }}>
        <div className="max-w-[790px] flex flex-wrap h-screen justify-center items-center">
          <Formulario/>
        </div>
    </section>
    </>
  )
}

export default Registro