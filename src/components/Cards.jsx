const Cards = ({name,img}) => {
  return (
    <>
      <a className="group hover:scale-105 ease-in-out duration-300" href="#" >
        <img
          alt="Lava"
          src={img}
          className="h-56 w-[18rem] rounded-xl object-contain shadow-xl transition group-hover:grayscale-[50%]  object-center  "
        />

        <div className="p-4">
            <h3 className="text-lg font-medium text-blue-500 ">
              {name}
            </h3>
        </div>
      </a>
    </>
  );
};

export default Cards;
