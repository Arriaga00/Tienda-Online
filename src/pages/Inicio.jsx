/* eslint-disable react/prop-types */
import CardContenido from "../components/CardContenido";
import Pie from "../components/Pie";
import Publicidad from "../components/Publicidad";
import Contenido from "../data/articulos.json"

const Inicio = ({filtrado}) => {
  
  const busqueda = !filtrado ? Contenido : Contenido.filter(el => el.titulo.toLowerCase().includes(filtrado.toLowerCase()))

  return (
    <>
      <div className=" flex justify-center items-center flex-col">
        <main className="max-w-[1500px] mb-8">
          <Publicidad />
          <h1 className="text-start pl-3 text-4xl font-bold pt-7 font-mono ">Destacados</h1>
          <div className="flex flex-wrap w-full gap-8 justify-center mt-10">
          {busqueda.map((el,i)=>{
            return(
              <CardContenido key={i} img={el.img} descripcion={el.descriccion}  titulo={el.titulo} precio={el.precio}/>
            )
          })}
          </div>
        </main>
        <footer className="w-full"><Pie/></footer>
      </div>
    </>
  );
};

export default Inicio;
