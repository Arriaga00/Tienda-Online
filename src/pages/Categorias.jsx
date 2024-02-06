import Cards from "../components/cards";
import Data from "../data/categorias.json";

const Categorias = () => {
  return (
    <>
      <section className=" flex justify-center items-center h-screen w-full">
        <main className="max-w-[1500px] flex gap-5 flex-wrap justify-center">
          {Data.map((el) => {
            return (
              <Cards key={el.categoria} name={el.categoria} img={el.img} />
            );
          })}
        </main>
      </section>
    </>
  );
};

export default Categorias;
