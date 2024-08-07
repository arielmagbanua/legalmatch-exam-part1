import classNames from "classnames";

function TextInput({className, label, icon, placeholder}) {
  const classes = classNames('flex flex-col px-20 w-full', className);


  return (
    <div className={classes}>
      <label className="block text-sm font-medium leading-6">{label}</label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-white sm:text-sm bg-amber-500 px-2.5 py-1 rounded-3xl text-xs">{icon}</span>
        </div>
        <input
          type="text"
          className="block w-full h-12 rounded-3xl border-0 py-1.5 pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default TextInput
