import TextInput from "./TextInput";
import classNames from "classnames";
import {useEffect, useRef, useState} from "react";
import parser from "papaparse";
import usZips from "../data/uszips.csv";
import useDismissTarget from "../hooks/dissmiss-target";

function AutoCompleteInput({className, icon, label, placeholder}) {
  const classes = classNames('grid grid-cols-1 px-20', className);

  const [keyword, setKeyword] = useState('');
  const [zipCodes, setZipCodes] = useState([]);
  const [filteredZipCodes, setFilteredZipCodes] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const suggestionBox = useRef();
  useDismissTarget(suggestionBox, setShowSuggestion);

  useEffect(() => {
    parser.parse(usZips, {
      download: true,
      complete: (result) => {
        setZipCodes(result.data);
      },
      header: true
    });
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowSuggestion(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleOnChange = (value) => {
    setKeyword(value);

    if (!value) {
      setFilteredZipCodes([]);
      setShowSuggestion(false);
      return;
    }

    let result = [];

    if (!isNaN(value)) {
      // input is number so it is likely a zip
      result = zipCodes.filter((data) => data.zip === value);
    } else {
      // most likely the user is looking up for a city
      result = zipCodes.filter((data) => {
          if (data.city) {
            const city = data.city.toLowerCase();
            return city.includes(value.toLowerCase());
          }

          return false;
        }
      );
    }

    if (result.length > 0) {
      if (result.length > 10) {
        setFilteredZipCodes(result.slice(0, 10));
      } else {
        setFilteredZipCodes(result);
      }

      setShowSuggestion(true);
      return;
    }

    setShowSuggestion(false);
  }

  const handleSelect = (value) => {
    setKeyword(value);
    setShowSuggestion(false);
  }

  const renderedSuggestionList = filteredZipCodes.map((zipData) => {
    const formatted = `${zipData.city}, ${zipData.state_id} ${zipData.zip}`;
    return (
      <li className="py-2 cursor-pointer hover:text-blue-600"
          key={zipData.zip}
          onClick={() => handleSelect(formatted)}>{formatted}
      </li>
    )
  });

  const renderedSuggestions = showSuggestion && (
    <div ref={suggestionBox} className="relative z-20">
      <div className="absolute w-full bg-white rounded-2xl shadow-sm px-6 py-2">
        <div className="flex flex-col">
          <ol className="text-black">
            {renderedSuggestionList}
          </ol>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes}>
      <TextInput
        label={label}
        icon={icon}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={keyword}
        className="mb-1"
      />
      {renderedSuggestions}
    </div>
  );
}

export default AutoCompleteInput;
