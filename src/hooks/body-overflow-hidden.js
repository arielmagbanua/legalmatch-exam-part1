import {useEffect} from "react";

// this is to disable the scrolling when the page is too large during showing off the dialog
function useBodyOverflowHidden() {
  return useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, []);
}

export default useBodyOverflowHidden;