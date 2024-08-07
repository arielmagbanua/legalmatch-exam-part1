import classNames from "classnames";

function TextInput({className, label, icon}) {
  const classes = classNames('flex flex-col grow px-20 w-full', className);

  return (
    <div className={classes}>
      <label className="grow py-1">{label}</label>
      <div className="relative grow">
        <span className="absolute left-4 top-2/4 -translate-y-1/2 text-white bg-amber-500 px-2.5 py-1 rounded-3xl text-xs">
          {icon}
        </span>
        <input className="h-11 rounded-3xl w-full pl-14 outline-4 outline-blue-500 focus:outline text-black" type="text"/>
      </div>
    </div>
  );
}

export default TextInput
