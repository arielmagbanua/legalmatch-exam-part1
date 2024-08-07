import classNames from "classnames";
import {FaCheck} from "react-icons/fa";

function CheckList({items, className}) {
  const classes = classNames('flex items-center justify-center', className);

  const renderItems = items.map((item, index) => {
    return (
      <li key={index} className="flex items-center justify-start">
        <FaCheck className="text-xl text-green-600"/>

        {item}
      </li>
    )
  });

  return (
    <div className={classes}>
      <ol>
        {renderItems}
      </ol>
    </div>
  );
}

export default CheckList;