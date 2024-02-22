import Cards from "../components/Cards";
import Pie from "../components/Pie";
import Data from "../data/categorias.json";

const Categorias = () => {
  return (
    <>
      <section className=" flex justify-center items-center h-screen w-full flex-wrap ">
        <main className="max-w-[1500px] flex gap-5 flex-wrap justify-center mt-20">
          {Data.map((el) => {
            return (
              <Cards key={el.categoria} name={el.categoria} img={el.img} />
            );
          })}
        </main>
      </section>
      <Pie/>
    </>
  );
};

export default Categorias;
