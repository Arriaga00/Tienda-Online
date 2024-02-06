const NoFound = () => {
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4 z-50" style={{ position: "fixed", width: "100%", top: "0", zIndex: "30" }}>
        <h1 className="uppercase tracking-widest text-gray-500">
          404 | Not Found
        </h1>
      </div>
    </>
  );
};

export default NoFound;
