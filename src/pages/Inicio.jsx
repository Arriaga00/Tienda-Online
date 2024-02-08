import Publicidad from "../components/Publicidad";

const Inicio = () => {
  return (
    <>
      <div className=" flex justify-center items-center ">
        <main className="max-w-[1500px]">
          <Publicidad />
          <h1 className="text-start pl-3 text-4xl font-bold pt-7 font-mono ">Destacados</h1>
        </main>
      </div>
    </>
  );
};

export default Inicio;
