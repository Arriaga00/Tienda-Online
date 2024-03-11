/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Cards = ({name,img}) => {
  return (
    <>
      <Link to={`/categorias/${name}`} className="group hover:scale-105 ease-in-out duration-300" >
        <img
          alt="categorias"
          src={img}
          className="h-56 w-[18rem] rounded-xl object-contain shadow-xl transition group-hover:grayscale-[50%]  object-center  "
        />

        <div className="p-4">
            <h3 className="text-lg font-medium text-blue-500 ">
              {name}
            </h3>
        </div>
      </Link>
    </>
  );
};

export default Cards;
