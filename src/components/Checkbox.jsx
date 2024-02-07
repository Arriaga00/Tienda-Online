const Checkbox = ({text}) => {
  return (
    <>
      <fieldset>
        <label
          htmlFor="Option1"
          className="flex cursor-pointer items-start gap-2 "
          aria-required
        >
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300"
              id="Option1"
            />
          </div>

          <div>
            <span className=" text-gray-500 flex text-start flex-wrap">
            {text}
            </span>
          </div>
        </label>
      </fieldset>
    </>
  );
};

export default Checkbox;
