import classNames from "classnames";

function CheckBox({className, checked, label, onChange}) {
  const classes = classNames(
    'flex flex-nowrap items-center justify-start cursor-pointer',
    className
  );

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  }

  return (
    <div className={classes}>
      <input type="checkbox" name="checkbox" checked={checked} onChange={handleChange}/>
      <label className="ml-4 cursor-pointer" htmlFor="checkbox">{label}</label>
    </div>
  )
}

export default CheckBox;